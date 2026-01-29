import { useState, useCallback } from 'react';
import { Canvas } from '@react-three/fiber';
import { Terrain } from './Terrain';
import { RaindropText } from './RaindropText';
import { MoodParams } from '../data/content';
import * as THREE from 'three';

interface SceneProps {
    moodParams: MoodParams;
    currentSection: number;
    onRippleComplete: () => void;
}

interface RippleState {
    x: number;
    y: number;
    radius: number;
    active: boolean;
}

function SceneContent({ moodParams, currentSection, onRippleComplete }: SceneProps) {
    const [ripple, setRipple] = useState<RippleState>({ x: 0, y: 0, radius: 0, active: false });

    const handleRippleUpdate = useCallback((x: number, y: number, radius: number, active: boolean) => {
        setRipple({ x, y, radius, active });
    }, []);

    return (
        <>
            <Terrain
                moodParams={moodParams}
                rippleX={ripple.x}
                rippleY={ripple.y}
                rippleRadius={ripple.radius}
                rippleActive={ripple.active}
            />
            <RaindropText
                currentSection={currentSection}
                onRippleComplete={onRippleComplete}
                onRippleUpdate={handleRippleUpdate}
            />
        </>
    );
}

export function Scene({ moodParams, currentSection, onRippleComplete }: SceneProps) {
    return (
        <Canvas
            camera={{
                position: [0, 8, 12],
                fov: 55,
                near: 0.1,
                far: 500,
            }}
            gl={{
                antialias: true,
                alpha: false,
            }}
            onCreated={({ gl }) => {
                gl.setClearColor(new THREE.Color('#000000'));
            }}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100vw',
                height: '100vh',
            }}
        >
            <SceneContent
                moodParams={moodParams}
                currentSection={currentSection}
                onRippleComplete={onRippleComplete}
            />
        </Canvas>
    );
}
