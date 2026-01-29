import { useRef, useState, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text } from '@react-three/drei';
import { CONTENT } from '../data/content';
import * as THREE from 'three';

interface FlashingTextProps {
    currentSection: number;
    textOpacity: number;
}

export function FlashingText({ currentSection, textOpacity }: FlashingTextProps) {
    const groupRef = useRef<THREE.Group>(null);
    const content = CONTENT[currentSection];

    // Randomize position for each new section
    const [position, setPosition] = useState<[number, number, number]>([0, 0, 0]);

    useEffect(() => {
        // Random position between the waves
        setPosition([
            (Math.random() - 0.5) * 20,  // X: scattered across width
            (Math.random() - 0.5) * 30,  // Y: scattered across height
            (Math.random() - 0.5) * 5    // Z: slight depth variation
        ]);
    }, [currentSection]);

    // Gentle floating animation
    useFrame((state) => {
        if (groupRef.current) {
            const time = state.clock.elapsedTime;
            groupRef.current.position.y = position[1] + Math.sin(time * 0.5) * 0.3;
            groupRef.current.position.x = position[0] + Math.cos(time * 0.3) * 0.2;
        }
    });

    if (!content) return null;

    const lines = content.text.split('\n');
    const isTitle = content.type === 'title';

    return (
        <group ref={groupRef} position={position}>
            {lines.map((line, index) => (
                <Text
                    key={`${currentSection}-${index}`}
                    position={[0, -index * 0.4, 0]}
                    fontSize={isTitle ? 0.5 : 0.22}
                    color="white"
                    anchorX="center"
                    anchorY="middle"
                    fillOpacity={textOpacity * 0.75}
                    maxWidth={18}
                    textAlign="center"
                    letterSpacing={isTitle ? 0.2 : 0.05}
                >
                    {line}
                </Text>
            ))}
        </group>
    );
}
