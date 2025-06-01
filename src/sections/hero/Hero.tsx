import React, { useRef, useEffect, Suspense } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { useAnimations, PerspectiveCamera, useProgress, Html } from "@react-three/drei";
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { Object3D } from 'three';
import { Terminal, AnimatedSpan } from "@/components/magicui/terminal";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import ShimmerButton from "@/components/ui/shimmer-button";
import { MdEmail } from "react-icons/md";
import { FaLinkedin, FaGithub, FaGlobe } from "react-icons/fa";
import { SiLeetcode, SiDevdotto } from "react-icons/si";

import About from "./About";
import Skills from "./Skills";

function Loader() {
  const { progress } = useProgress();
  return <Html className="text-white" center>{progress.toFixed(0)}% loaded</Html>;
}

const Model = React.memo(function Model() {
  const group = useRef<Object3D>(null);
  const { scene, animations } = useLoader(GLTFLoader, "/models/360_sphere_robot_no_glass.glb");

  const { actions } = useAnimations(animations, group);


  useEffect(() => {
    const actionKeys = Object.keys(actions);
    if (actionKeys.length > 0) {
      const firstAction = actions[actionKeys[0]];
      firstAction?.play();
    }
  }, [actions]);

  useFrame(({ clock, pointer }) => {
    // Add subtle vertical bobbing
    if (group.current) {
      group.current.position.y = Math.sin(clock.getElapsedTime() * 1) * 0.1; // Adjust frequency (1) and amplitude (0.1)

      // Add subtle rotation based on pointer movement
      const targetRotationY = pointer.x * 0.3; // Horizontal movement (yaw)
      const targetRotationX = -pointer.y * 0.3; // Vertical movement (pitch) - inverted

      group.current.rotation.y += (targetRotationY - group.current.rotation.y) * 0.07; // Smooth rotation
      group.current.rotation.x += (targetRotationX - group.current.rotation.x) * 0.07; // Smooth rotation
    }
  });

  return (
    <primitive object={scene} ref={group} scale={7} />
  );
});

export default function Hero() {
  
  const words = [
    {
      text: "MILAN PATEL",
      className: "font-light text-2xl sm:text-xl md:text-3xl lg:text-3xl font-oxanium text-gray-300"
    },
    // {
    //   text: "Patel",
    // },
    {
      text: "Full-Stack",
      className: "font-oxanium font-light text-sm sm:text-3xl md:text-3xl lg:text-3xl animate-gradient-x",
    },
    {
      text: "Developer",
      className: "font-oxanium font-light text-sm sm:text-3xl md:text-3xl lg:text-3xl animate-gradient-x",
    },
  ];
  return (
    <section className="relative flex flex-col items-center justify-start p-4 sm:p-6 md:p-8 lg:p-10 mt-28 overflow-hidden animate-fade-in" id="home">
      <div className="relative z-10 w-full flex flex-col items-center justify-center mb-8 overflow-hidden">
        {/* Animated headline: Use TypewriterEffectSmooth as before */}


        <Terminal className="w-full max-w-5xl mx-auto bg-black max-h-fit border-2 border-gray-500/50 bg-clip-padding shadow-[0_0_15px_rgba(255,255,255,0.2)] rounded-2xl overflow-hidden">
          {/* Terminal Header with Name */}
          <TypewriterEffectSmooth words={words} className="w-fit" />

          <div className="flex items-center gap-3 mb-4">

            <span className="font-bold text-lg text-gray-300 tracking-widest">MILAN</span>
            <span className="text-xs text-gray-400 ml-2">~$</span>
          </div>
          {/* Terminal Content: Flex for text and 3D model */}
          <div className="flex flex-col md:flex-row w-full gap-6 items-center md:items-start">
            {/* Terminal Text (About Me) with lots of code-style commands */}

            <div className="flex-1 min-w-[220px] w-full">
              <AnimatedSpan delay={600} className="font-mono text-gray-200">$ whoami</AnimatedSpan>
              <AnimatedSpan delay={900} className="font-mono text-gray-400">Milan Patel (Full-Stack Developer)</AnimatedSpan>
              <AnimatedSpan delay={1200} className="font-mono text-gray-200">$ location</AnimatedSpan>
              <AnimatedSpan delay={1500} className="font-mono text-gray-400">Ahmedabad, GJ, India</AnimatedSpan>
              <AnimatedSpan delay={1800} className="font-mono text-gray-200">$ stack --list</AnimatedSpan>
              <AnimatedSpan delay={2100} className="font-mono text-gray-400">React, Next.js, Node.js, MongoDB, SQL, Python</AnimatedSpan>
              <AnimatedSpan delay={2400} className="font-mono text-gray-200">$ summary</AnimatedSpan>
              <AnimatedSpan delay={2700} className="font-mono text-gray-400">Passionate about building web applications that blend creativity with functionality. MCA student, hands-on with React, Node.js, Python, SQL. Eager to contribute and grow as a developer!</AnimatedSpan>
              <AnimatedSpan delay={3000} className="font-mono text-gray-200">$ contact --all</AnimatedSpan>
              <AnimatedSpan delay={3300} className="font-mono text-gray-400">
                <a href="mailto:milanpatel6454@gmail.com" className="underline hover:text-blue-400 flex items-center gap-2">
                  <MdEmail className="text-lg" /> milanpatel6454@gmail.com
                </a>
              </AnimatedSpan>
              <AnimatedSpan delay={3600} className="font-mono text-gray-400">
                <a href="https://www.linkedin.com/in/milan-patel-37650330b" target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-400 flex items-center gap-2">
                  <FaLinkedin className="text-lg" /> linkedin.com/in/milan-patel-37650330b
                </a>
              </AnimatedSpan>
              <AnimatedSpan delay={3900} className="font-mono text-gray-400">
                <a href="https://github.com/MilanPatel2003" target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-400 flex items-center gap-2">
                  <FaGithub className="text-lg" /> github.com/MilanPatel2003
                </a>
              </AnimatedSpan>
              <AnimatedSpan delay={4200} className="font-mono text-gray-400">
                <a href="https://milanpatel.vercel.app/" target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-400 flex items-center gap-2">
                  <FaGlobe className="text-lg" /> milanpatel.vercel.app
                </a>
              </AnimatedSpan>
              <AnimatedSpan delay={4500} className="font-mono text-gray-400">
                <a href="https://leetcode.com/u/MilanPatel2003/" target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-400 flex items-center gap-2">
                  <SiLeetcode className="text-lg" /> leetcode.com/u/MilanPatel2003/
                </a>
              </AnimatedSpan>
              <AnimatedSpan delay={4800} className="font-mono text-gray-400">
                <a href="https://dev.to/milanpatel2003" target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-400 flex items-center gap-2">
                  <SiDevdotto className="text-lg" /> dev.to/milanpatel2003
                </a>
              </AnimatedSpan>
            </div>
            {/* 3D Model (Right Side) with OrbitingCircles - hidden on small screens */}
            <div className="hidden md:flex flex-1 justify-center items-center min-w-[220px] max-w-[350px] w-full h-[220px] sm:h-[260px] md:h-[300px] lg:h-[340px] xl:h-[400px] relative">
              
              <Canvas className="overflow-hidden"
                gl={{ antialias: true, powerPreference: "high-performance" }}
                dpr={[1, 2]}
              >
                <PerspectiveCamera makeDefault position={[0, 0, 4]} fov={50} />
                <ambientLight intensity={1.2} />
                <spotLight
                  position={[0, 10, 0]}
                  angle={0.4}
                  penumbra={0.5}
                  intensity={6}
                  castShadow
                  color="#ffffff"
                />
                <spotLight
                  position={[5, 5, 5]}
                  angle={0.3}
                  penumbra={1}
                  intensity={5}
                  castShadow
                  color="#ffffff"
                />
                <spotLight
                  position={[-5, 5, 5]}
                  angle={0.3}
                  penumbra={1}
                  intensity={5}
                  castShadow
                  color="#ffffff"
                />
                <pointLight
                  position={[2, 2, -2]}
                  intensity={0.8}
                  color="#ffffff"
                />
                <pointLight
                  position={[-2, 2, -2]}
                  intensity={0.8}
                  color="#ffffff"
                />
                <pointLight position={[0, 5, 0]} intensity={2} color="#ffffff" />
                <Suspense fallback={<Loader />}>
                  <Model />
                </Suspense>
              </Canvas>
            </div>
          </div>
        </Terminal>
        {/* Download Resume button outside terminal */}
        <div className="mt-6 mb-4 flex w-full justify-center">
          <a href="/Milans_latest_Resume.pdf" download className="w-full max-w-xs">
            <ShimmerButton className="w-full py-3 text-base">
              Download Resume
            </ShimmerButton>
          </a>
        </div>
      </div>
      <div className="w-full relative z-10">
        <About />
        <Skills />
      </div>
    </section>
  );
}
