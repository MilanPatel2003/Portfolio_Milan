import React, { useRef, useEffect, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { useAnimations, PerspectiveCamera, useProgress, Html } from "@react-three/drei";
import { Terminal, TypingAnimation, AnimatedSpan } from "@/components/magicui/terminal";
import { OrbitingSkills } from "./orbit";
import About from "./About";
import Skills from "./Skills";
import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

function Loader() {
  const { progress } = useProgress();
  return <Html center>{progress.toFixed(0)}% loaded</Html>;
}

const Model = React.memo(function Model() {
  const group = useRef();
  const { scene, animations } = useLoader(GLTFLoader, "/models/robot_playground.glb");
  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    const actionKeys = Object.keys(actions);
    if (actionKeys.length > 0) {
      const firstAction = actions[actionKeys[0]];
      firstAction?.play();
    }
  }, [actions]);

  return <primitive object={scene} ref={group} />;
});

export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-start p-4 sm:p-6 md:p-8 lg:p-10">
      <div className="w-full flex flex-col lg:flex-row items-center justify-center mb-8">
        <div className="w-full lg:w-1/2 h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] xl:h-[500px] relative mt-16 sm:mt-20 lg:mt-0">
          <Canvas
            gl={{ antialias: false, powerPreference: "high-performance" }}
            dpr={[1, 2]}
          >
            <PerspectiveCamera makeDefault position={[0, 0.5, 5]} fov={60} />
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} />
            <Suspense fallback={<Loader />}>
              <Model />
            </Suspense>
          </Canvas>
          <div className="absolute inset-0 pointer-events-none z-10">
            <OrbitingSkills />
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:pl-8 mt-6 lg:mt-0">
          <Terminal>
            <TypingAnimation>
              &gt; Welcome to my portfolio!
            </TypingAnimation>
            <AnimatedSpan delay={1500} className="text-green-500">
              ✔ Loading personal information...
            </AnimatedSpan>
            <AnimatedSpan delay={2000} className="text-green-500">
              ✔ Initializing 3D model...
            </AnimatedSpan>
            <AnimatedSpan delay={2500} className="text-green-500">
              ✔ Setting up interactive elements...
            </AnimatedSpan>
            <AnimatedSpan delay={3000} className="text-green-500">
              ✔ Loading skills and experience...
            </AnimatedSpan>
            <AnimatedSpan delay={3500} className="text-green-500">
              ✔ Portfolio modules loaded.
            </AnimatedSpan>
            <AnimatedSpan delay={4000} className="text-green-500">
              ✔ Projects fetched successfully.
            </AnimatedSpan>
            <AnimatedSpan delay={4500} className="text-green-500">
              ✔ Contact form initialized.
            </AnimatedSpan>
            <AnimatedSpan delay={5000} className="text-green-500">
              ✔ UI animations ready.
            </AnimatedSpan>
            <AnimatedSpan delay={5500} className="text-green-500">
              ✔ All systems operational.
            </AnimatedSpan>
            <AnimatedSpan delay={6000} className="text-blue-500">
              ℹ System Status:
              - 3D Model: Active
              - Skills Orbit: Running
              - Portfolio: Ready
            </AnimatedSpan>
          </Terminal>
        </div>
      </div>
      <div className="w-full">
        <About />
        <Skills />
      </div>
    </section>
  );
}
