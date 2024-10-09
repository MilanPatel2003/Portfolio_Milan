import React, { useRef, useEffect, Suspense, useMemo } from "react";
import { Canvas } from "@react-three/fiber";
import {  useAnimations, PerspectiveCamera, useProgress, Html } from "@react-three/drei";
import TypingAnimation from "@/components/ui/typing-animation";
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
  const pixieText = "Hey there! I'm Pixie, your friendly robot companion. 🤖 My master and I are stranded in space 🚀, but while we're stuck, why not explore this portfolio? Dive into the creativity that powers our journey through the stars!";

  const memoizedTypingAnimation = useMemo(() => (
    <TypingAnimation
      className="text-gray-300 text-sm sm:text-base md:text-lg lg:text-xl oxanium-pixie-text"
      text={pixieText}
      duration={30}
    />
  ), []);

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
          {memoizedTypingAnimation}
        </div>
      </div>
      <div className="w-full">
        <About />
        <Skills />
      </div>
    </section>
  );
}
