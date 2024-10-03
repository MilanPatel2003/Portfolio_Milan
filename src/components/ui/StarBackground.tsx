import React, { useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as random from "maath/random";
import * as THREE from 'three';

const StarBackground = React.memo((props: any) => {
  const ref = useRef<THREE.Points>(null);

  const sphere = useMemo(() => {
    const positions = random.inSphere(new Float32Array(5000), { radius: 1.2 });
    return positions;
  }, []);

  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
        <PointMaterial
          transparent
          color="#fff"
          size={0.002}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
});

const StarsCanvas: React.FC = () => (
  <div className="w-full h-auto fixed inset-0 z-[1]">
    <Canvas camera={{ position: [0, 0, 1] }}>
      <React.Suspense fallback={null}>
        <StarBackground />
      </React.Suspense>
    </Canvas>
  </div>
);

export default StarsCanvas;
