import { useMemo, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { createNoise2D } from 'simplex-noise';
import { MoodParams } from '../data/content';

interface TerrainProps {
  moodParams: MoodParams;
}

export function Terrain({ moodParams }: TerrainProps) {
  const pointsRef = useRef<THREE.Points>(null);
  const noise2D = useMemo(() => createNoise2D(), []);

  // CONFIGURATION
  const ROWS = 100;    // Denser rows (more lines like the reference)
  const COLS = 400;    // Smoother lines
  const WIDTH = 160;   // Cover more width
  const DEPTH = 120;   // Deeper field

  // 1. INITIAL GEOMETRY (The Grid)
  const { positions, originalPositions } = useMemo(() => {
    const pos = new Float32Array(ROWS * COLS * 3);
    const orig = new Float32Array(ROWS * COLS * 3);

    for (let i = 0; i < ROWS; i++) {
      const z = (i / (ROWS - 1)) * DEPTH - (DEPTH / 2);

      for (let j = 0; j < COLS; j++) {
        const x = (j / (COLS - 1)) * WIDTH - (WIDTH / 2);

        const index = (i * COLS + j) * 3;

        pos[index] = x;
        pos[index + 1] = 0;
        pos[index + 2] = z;

        orig[index] = x;
        orig[index + 1] = 0;
        orig[index + 2] = z;
      }
    }
    return { positions: pos, originalPositions: orig };
  }, []);

  // 2. ANIMATION LOOP 
  useFrame((state) => {
    if (!pointsRef.current) return;

    const time = state.clock.elapsedTime;
    const { speed, noiseStrength } = moodParams;

    const geometry = pointsRef.current.geometry;
    const posAttr = geometry.attributes.position as THREE.BufferAttribute;

    for (let i = 0; i < ROWS; i++) {
      for (let j = 0; j < COLS; j++) {
        const vertexIndex = i * COLS + j;
        const index = vertexIndex * 3;

        // Get original coordinates
        const ox = originalPositions[index];
        const oz = originalPositions[index + 2];

        // 1. Flow
        const flowZ = oz - (time * speed * 3.0);

        // 2. Noise Physics
        // Slightly higher frequency for "wrinkled" fabric look
        const xFreq = ox * 0.06;
        const zFreq = flowZ * 0.09;

        // Base Noise
        const noise = noise2D(xFreq, zFreq + time * 0.2);

        // 3. Texture
        // Abs noise for ridges, but NO ENVELOPE (fill the screen)
        // Power of 1.2 is softer than 1.5, allowing more intermediate details
        let elevation = Math.pow(Math.abs(noise), 1.2);

        // 4. Height
        // Increase base multiplier since we removed the aggressive envelope peaking
        const y = elevation * noiseStrength * 6.0;

        posAttr.setY(vertexIndex, y);
      }
    }

    posAttr.needsUpdate = true;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      {/* THE LOOK: Small white dots */}
      <pointsMaterial
        size={0.15}            // Adjust for dot size
        color="#ffffff"
        sizeAttenuation={true} // Dots get smaller far away
        transparent={true}
        opacity={0.8}
      />
    </points>
  );
}