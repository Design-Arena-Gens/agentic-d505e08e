"use client";

import { Suspense, useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  Environment,
  Float,
  Lightformer,
  Line,
  PerspectiveCamera,
} from "@react-three/drei";
import * as THREE from "three";

function EditorialRibbon() {
  const meshRef = useRef<THREE.Mesh>(null);
  const gradientMap = useMemo(() => {
    if (typeof window === "undefined") return null;
    const canvas = document.createElement("canvas");
    canvas.width = 16;
    canvas.height = 16;
    const ctx = canvas.getContext("2d");
    if (!ctx) {
      return null;
    }
    const gradient = ctx.createLinearGradient(0, 0, 16, 16);
    gradient.addColorStop(0, "#00D1FF");
    gradient.addColorStop(0.5, "#FFFFFF");
    gradient.addColorStop(1, "#121212");
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, 16, 16);
    const texture = new THREE.CanvasTexture(canvas);
    texture.anisotropy = 8;
    return texture;
  }, []);

  useFrame((_, delta) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.y += delta * 0.22;
    meshRef.current.rotation.x += delta * 0.08;
  });

  return (
    <mesh ref={meshRef} scale={[1.1, 1.1, 1.1]}>
      <torusKnotGeometry args={[1.3, 0.32, 240, 32, 2, 5]} />
      <meshStandardMaterial
        color="#0b0b0b"
        metalness={0.9}
        roughness={0.15}
        envMapIntensity={1.2}
        map={gradientMap ?? undefined}
      />
    </mesh>
  );
}

function OrbitingGlyph({ offset = 0 }: { offset?: number }) {
  const groupRef = useRef<THREE.Group>(null);
  useFrame(({ clock }) => {
    if (!groupRef.current) return;
    const t = clock.getElapsedTime() * 0.6 + offset;
    groupRef.current.position.x = Math.cos(t) * 2.8;
    groupRef.current.position.z = Math.sin(t) * 2.8;
    groupRef.current.position.y = Math.sin(t * 0.9) * 0.6;
    groupRef.current.rotation.y = t;
  });
  return (
    <group ref={groupRef}>
      <Float floatIntensity={1.3} rotationIntensity={0.6}>
        <mesh>
          <icosahedronGeometry args={[0.24, 0]} />
          <meshStandardMaterial
            color="#00D1FF"
            emissive="#0087aa"
            emissiveIntensity={0.8}
            metalness={0.4}
            roughness={0.1}
          />
        </mesh>
      </Float>
    </group>
  );
}

function EditorialGuides() {
  const points = useMemo<[number, number, number][]>(
    () =>
      new Array(120).fill(0).map((_, i) => [
        Math.cos(i * 0.15) * 3.2,
        Math.sin(i * 0.1) * 0.8,
        Math.sin(i * 0.15) * 3.2,
      ]),
    [],
  );
  return (
    <group>
      <Line
        points={points}
        color="#00D1FF"
        lineWidth={0.75}
        dashed={false}
        opacity={0.4}
        transparent
      />
      <Line
        points={points.map(
          ([x, y, z]) => [x * 0.75, y * 0.9, z * 0.75] as [number, number, number],
        )}
        color="#ffffff"
        lineWidth={0.6}
        dashed={false}
        opacity={0.18}
        transparent
      />
    </group>
  );
}

export function HeroScene() {
  return (
    <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 via-black to-black">
      <div className="pointer-events-none absolute inset-0 mix-blend-screen">
        <div className="absolute -inset-24 bg-[radial-gradient(circle_at_top,_rgba(0,209,255,0.25),_transparent_55%)] blur-3xl" />
      </div>
      <Canvas
        camera={{ position: [0, 0, 5.2], fov: 42 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true }}
      >
        <Suspense fallback={null}>
          <color attach="background" args={["#050505"]} />
          <PerspectiveCamera makeDefault position={[0, 0, 5.2]} fov={42} />
          <ambientLight intensity={0.25} />
          <spotLight
            position={[6, 6, 4]}
            angle={0.9}
            penumbra={0.4}
            intensity={2.1}
            color="#00d1ff"
          />
          <spotLight
            position={[-4, -4, -2]}
            angle={0.65}
            penumbra={0.7}
            intensity={1.6}
            color="#ffffff"
          />
          <EditorialRibbon />
          <EditorialGuides />
          <OrbitingGlyph offset={0} />
          <OrbitingGlyph offset={Math.PI / 2} />
          <Environment resolution={256}>
            <Lightformer
              intensity={2}
              rotation-x={Math.PI / 2}
              position={[0, 2, -2]}
              scale={[10, 10, 1]}
              color="#0a0a0a"
            />
            <Lightformer
              intensity={5}
              rotation-y={Math.PI / 2}
              position={[4, 0, 0]}
              scale={[6, 3, 1]}
              color="#00d1ff"
            />
          </Environment>
        </Suspense>
      </Canvas>
      <div className="pointer-events-none absolute bottom-6 left-6 right-6 rounded-xl border border-white/10 bg-black/50 p-4 backdrop-blur">
        <p className="font-mono text-[0.75rem] uppercase tracking-[0.35em] text-white/70">
          Editorial Depth Visualizer
        </p>
        <p className="mt-2 text-sm text-white/60">
          Real-time glyph mapping of motion energy vs. narrative silence.
        </p>
      </div>
    </div>
  );
}
