"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Float, Sparkles, Trail } from "@react-three/drei";
import { useRef, useEffect } from "react";
import { useScroll } from "framer-motion";

function RevolvingShape({ scrollRef }) {
  const groupRef = useRef();
  const coreRef = useRef();
  const wireRef = useRef();
  const ringRef = useRef();
  const { pointer } = useThree();

  useFrame((state, delta) => {
    const progress = scrollRef.current ?? 0;
    const t = state.clock.getElapsedTime();

    if (coreRef.current) {
      coreRef.current.rotation.y += delta * 0.2 + progress * 0.05;
      coreRef.current.rotation.x += delta * 0.1;
      const hue = 0.52 + progress * 0.28;
      coreRef.current.material.color.setHSL(hue, 1, 0.55);
      coreRef.current.material.emissive.setHSL(hue, 1, 0.35);
    }

    if (wireRef.current) {
      wireRef.current.rotation.y -= delta * 0.12 + progress * 0.04;
      wireRef.current.rotation.z += delta * 0.06;
    }

    if (ringRef.current) {
      ringRef.current.rotation.z += delta * 0.15 + progress * 0.08;
      ringRef.current.rotation.x = Math.PI / 2.2 + Math.sin(t * 0.3) * 0.1;
    }

    if (groupRef.current) {
      groupRef.current.rotation.y += (pointer.x * 0.4 - groupRef.current.rotation.y) * 0.03;
      groupRef.current.rotation.x += (-pointer.y * 0.3 - groupRef.current.rotation.x) * 0.03;
      groupRef.current.position.y = Math.sin(t * 0.6) * 0.15;
    }
  });

  return (
    <group ref={groupRef}>
      <Float speed={1.7} rotationIntensity={0.18} floatIntensity={0.55}>
      <Trail width={0.7} length={5} color="#00f0ff" attenuation={(t) => t * t}>
      <mesh ref={coreRef}>
        <icosahedronGeometry args={[1.45, 2]} />
        <meshStandardMaterial
          color="#00f0ff"
          emissive="#00f0ff"
          emissiveIntensity={0.5}
          roughness={0.25}
          metalness={0.7}
          transparent
          opacity={0.88}
        />
      </mesh>
      </Trail>
      <mesh ref={wireRef} scale={1.18}>
        <icosahedronGeometry args={[1.5, 1]} />
        <meshBasicMaterial color="#a855f7" wireframe transparent opacity={0.35} />
      </mesh>
      <mesh ref={ringRef}>
        <torusGeometry args={[2.3, 0.015, 16, 100]} />
        <meshBasicMaterial color="#ff2ea6" transparent opacity={0.5} />
      </mesh>
      <mesh rotation={[1.1, 0.25, -0.25]}>
        <torusGeometry args={[2.75, 0.008, 12, 120]} />
        <meshBasicMaterial color="#00f0ff" transparent opacity={0.35} />
      </mesh>
      <mesh rotation={[0.15, -0.7, 0.6]}>
        <torusGeometry args={[3.12, 0.006, 12, 120]} />
        <meshBasicMaterial color="#a855f7" transparent opacity={0.25} />
      </mesh>
      <Sparkles count={70} scale={5.5} size={2} speed={0.4} color="#00f0ff" />
      </Float>
    </group>
  );
}

const Scene3D = ({ className = "" }) => {
  const scrollRef = useRef(0);
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (v) => {
      scrollRef.current = v;
    });
    return () => unsubscribe();
  }, [scrollYProgress]);

  return (
    <div className={`pointer-events-none ${className}`}>
      <Canvas
        camera={{ position: [0, 0, 6], fov: 45 }}
        dpr={[1, 1.5]}
        gl={{ alpha: true, antialias: true }}
      >
        <ambientLight intensity={0.35} />
        <pointLight position={[5, 5, 5]} intensity={1.2} color="#00f0ff" />
        <pointLight position={[-5, -3, -5]} intensity={0.8} color="#a855f7" />
        <pointLight position={[0, 0, 4]} intensity={0.55} color="#ffffff" />
        <RevolvingShape scrollRef={scrollRef} />
      </Canvas>
    </div>
  );
};

export default Scene3D;
