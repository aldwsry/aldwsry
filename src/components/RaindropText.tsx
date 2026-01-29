import { useRef, useMemo, useState } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { Text } from '@react-three/drei';
import { CONTENT } from '../data/content';
import * as THREE from 'three';

interface RaindropTextProps {
    // Props mostly unused now as we control scroll internally
    onRippleComplete?: () => void;
    currentSection?: number;
    onRippleUpdate?: (x: number, y: number, radius: number, active: boolean) => void;
}

export function RaindropText({ }: RaindropTextProps) {
    const groupRef = useRef<THREE.Group>(null);
    const { viewport } = useThree();

    // Flatten all lines into a single list for scrolling
    // We add spacing between sections
    const allLines = useMemo(() => {
        const lines: { text: string; isTitle: boolean; id: string }[] = [];
        CONTENT.forEach((section, sIdx) => {
            const sectionLines = section.text.split('\n');
            sectionLines.forEach((line, lIdx) => {
                lines.push({
                    text: line,
                    isTitle: section.type === 'title',
                    id: `${sIdx}-${lIdx}`
                });
            });
            // Add vertical gap between sections
            lines.push({ text: '', isTitle: false, id: `gap-${sIdx}` });
            lines.push({ text: '', isTitle: false, id: `gap2-${sIdx}` });
        });
        return lines;
    }, []);

    // Scroll speed - tuned for reading
    const SCROLL_SPEED = 1.2;
    const LINE_HEIGHT = 1.5;

    // Total height of the content
    const totalHeight = allLines.length * LINE_HEIGHT;

    // Start position (bottom of screen)
    // Viewport height ~40 units at standard z position
    const startY = -40; // Starts well below screen

    // State to track scroll
    const [yPos, setYPos] = useState(startY);

    useFrame((state, delta) => {
        // Move text up
        setYPos(prev => {
            let next = prev + SCROLL_SPEED * delta;

            // Loop functionality
            // When the entire text block has moved past the top of the view...
            // Top of screen is roughly +30
            // Bottom of text block is (next - totalHeight)
            // We want to reset when the *bottom* of the text clears the *top* of the screen.
            // Actually, usually we reset when the bottom clears the screen + buffer.
            const resetPoint = 30 + totalHeight;

            // Wait, we want continuous loop? 
            // Truly continuous requires cloning the text stack.
            // For now, let's just loop the position back to startY when it finishes
            // This leaves a gap, but works for "credits that loop".

            // If the *last line* has effectively scrolled off screen...
            // Position of first line is `next`.
            // Position of last line is `next - totalHeight`.
            // If `next - totalHeight > 30` (top of screen), then reset.

            if (next - totalHeight > 40) {
                return startY;
            }
            return next;
        });
    });

    return (
        <group ref={groupRef} position={[0, 0, 0]}>
            {allLines.map((lineData, index) => {
                const lineY = yPos - (index * LINE_HEIGHT);

                // Optimization: Only render if potentially visible
                // Visible range roughly -30 to +30 vertically
                if (lineY < -40 || lineY > 40) return null;

                return (
                    <Text
                        key={lineData.id}
                        position={[0, lineY, 0]}
                        fontSize={lineData.isTitle ? 1.5 : 0.8}
                        color="white"
                        anchorX="center"
                        anchorY="middle"
                        maxWidth={40}
                        textAlign="center"
                    // Using default font to ensure loading
                    >
                        {lineData.text}
                    </Text>
                );
            })}
        </group>
    );
}
