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

function SceneContent({ moodParams, currentSection, onRippleComplete }: SceneProps) {
    return (
        <>
            <Terrain
                moodParams={moodParams}
            />
            <RaindropText
                currentSection={currentSection}
                onRippleComplete={onRippleComplete}
                onRippleUpdate={() => { }} // No-op since we removed the handler but props might expect it? 
            // Wait, RaindropText props defined onRippleUpdate.
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
