import React, { useRef, useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { useGLTF, useAnimations, PerspectiveCamera } from "@react-three/drei";
import TypingAnimation from "@/components/ui/typing-animation";
import { OrbitingSkills } from "./orbit";
import About from "./About";
import Skills from "./Skills";


function Model() {
  const group = useRef();
  const { scene, animations } = useGLTF("/models/robot_playground.glb");
  const { actions } = useAnimations(animations, group);

  React.useEffect(() => {
    // Play the first animation by default
    const actionKeys = Object.keys(actions);
    if (actionKeys.length > 0) {
      const firstAction = actions[actionKeys[0]];
      firstAction?.play();
    }
  }, [actions]);

  return <primitive object={scene} ref={group} />;
}

export default function Hero() {
  const [isAboutBlurred, setIsAboutBlurred] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAboutBlurred(false);
    }, 10000); 

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="flex flex-col items-center justify-start p-4 md:p-8 ">
      <div className="w-full flex flex-col md:flex-row items-center justify-center mb-8">
        <div className="w-full md:w-1/2 h-[250px] sm:h-[300px] md:h-[400px] lg:h-[500px] relative mt-28 md:mt-0">
          <Canvas>
            <PerspectiveCamera makeDefault position={[0, 0.5, 5]} fov={60} />
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} />
            <Model />
          </Canvas>
          <div className="absolute inset-0 pointer-events-none z-10">
            <OrbitingSkills />
          </div>
        </div>
        <div className="w-full md:w-1/2 md:pl-8 mt-4 md:mt-0">
          <TypingAnimation
            // Updated className to include new styles
            className="text-cyan-400 text-sm sm:text-base md:text-lg lg:text-xl oxanium-pixie-text glow-effect"
            // Updated text with emojis
            text="Hey there! I'm Pixie, your friendly robot companion. 🤖 My master and I are stranded in space 🚀, but while we're stuck, why not explore this portfolio? Dive into the creativity that powers our journey through the stars! "
            duration={40}
          />
        </div>
      </div>
      <div className={`w-full transition-all duration-1000 ${isAboutBlurred ? 'blur-sm' : 'blur-none'}`}>
        <About />
        <Skills />
      </div>
    </section>
  );
}
