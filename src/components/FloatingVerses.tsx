import { useMemo } from 'react';
import { Text } from '@react-three/drei';
import { CONTENT } from '../data/content';

interface FloatingVersesProps {
    cameraZ: number;
}

export function FloatingVerses({ cameraZ }: FloatingVersesProps) {
    const verses = useMemo(() => {
        return CONTENT.map((item, index) => {
            // Seeded random based on index
            const seed = index * 12345.6789;
            const pseudoRandom = (offset: number) => {
                const x = Math.sin(seed + offset) * 10000;
                return x - Math.floor(x);
            };

            return {
                text: item.text,
                isTitle: item.type === 'title',
                position: [
                    (pseudoRandom(1) - 0.5) * 15,
                    (pseudoRandom(2) - 0.5) * 6,
                    -index * 18 - 10
                ] as [number, number, number],
            };
        });
    }, []);

    return (
        <group>
            {verses.map((verse, index) => {
                const distanceFromCamera = Math.abs(verse.position[2] - cameraZ);
                const visibilityRange = 50;
                const fadeRange = 15;

                let opacity = 0;
                if (distanceFromCamera < visibilityRange) {
                    if (distanceFromCamera < fadeRange) {
                        opacity = 0.7;
                    } else {
                        opacity = 0.7 * (1 - (distanceFromCamera - fadeRange) / (visibilityRange - fadeRange));
                    }
                }

                if (opacity < 0.01) return null;

                const lines = verse.text.split('\n');

                return (
                    <group key={index} position={verse.position}>
                        {lines.map((line, lineIndex) => (
                            <Text
                                key={lineIndex}
                                position={[0, -lineIndex * 0.5, 0]}
                                fontSize={verse.isTitle ? 0.7 : 0.3}
                                color="white"
                                anchorX="center"
                                anchorY="middle"
                                fillOpacity={opacity}
                                maxWidth={20}
                                textAlign="center"
                                letterSpacing={verse.isTitle ? 0.25 : 0.08}
                            >
                                {line}
                            </Text>
                        ))}
                    </group>
                );
            })}
        </group>
    );
}
