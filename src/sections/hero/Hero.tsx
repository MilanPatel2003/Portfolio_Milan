import React, { useRef, useEffect, Suspense } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { useAnimations, PerspectiveCamera, useProgress, Html } from "@react-three/drei";
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { InteractiveHoverButton } from "@/components/magicui/interactive-hover-button";
import { Object3D } from 'three';
import { Terminal, TypingAnimation, AnimatedSpan } from "@/components/magicui/terminal";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import ShimmerButton from "@/components/ui/shimmer-button";
import { AnimatedGridPattern } from "@/components/magicui/animated-grid-pattern";
import GradualSpacing from "@/components/ui/gradual-spacing";
import OrbitingCircles from "@/components/ui/orbiting-circles";
// import { OrbitingSkills } from "./orbit";
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
      className: "font-light text-2xl sm:text-4xl md:text-3xl lg:text-5xl font-oxanium text-gray-300"
    },
    // {
    //   text: "Patel",
    // },
    {
      text: "Full-Stack",
      className: "font-oxanium font-light text-xl sm:text-3xl md:text-3xl lg:text-3xl animate-gradient-x",
    },
    {
      text: "Developer",
      className: "font-oxanium font-light text-xl sm:text-3xl md:text-3xl lg:text-3xl animate-gradient-x",
    },
  ];
  return (
    <section className="relative flex flex-col items-center justify-start p-4 sm:p-6 md:p-8 lg:p-10 mt-28 overflow-hidden animate-fade-in">
      <div className="relative z-10 w-full flex flex-col items-center justify-center mb-8">
        {/* Animated headline: Use TypewriterEffectSmooth as before */}
        <TypewriterEffectSmooth words={words} className="w-fit mb-8" />
        <Terminal className="w-full max-w-5xl mx-auto bg-black border-2 border-transparent bg-clip-padding shadow-2xl rounded-2xl overflow-hidden">
          {/* Terminal Header with Name */}
          <div className="flex items-center gap-3 mb-4">
            <span className="font-bold text-lg text-gray-300 tracking-widest">MILAN PATEL</span>
            <span className="text-xs text-gray-400 ml-2">~$</span>
          </div>
          {/* Terminal Content: Flex for text and 3D model */}
          <div className="flex flex-col md:flex-row w-full gap-6 items-center md:items-start">
            {/* Terminal Text (About Me) with lots of code-style commands */}
            <div className="flex-1 min-w-[220px] w-full">
              <AnimatedSpan delay={600} className="font-mono text-gray-200">$ cd ~/workspace</AnimatedSpan>
              <AnimatedSpan delay={900} className="font-mono text-gray-400">~/workspace</AnimatedSpan>
              <AnimatedSpan delay={1200} className="font-mono text-gray-200">$ ls -lh</AnimatedSpan>
              <AnimatedSpan delay={1500} className="font-mono text-gray-400">README.md  ideas.txt  src/  public/  deploy.sh</AnimatedSpan>
              <AnimatedSpan delay={1800} className="font-mono text-gray-200">$ cat ideas.txt</AnimatedSpan>
              <AnimatedSpan delay={2100} className="font-mono text-gray-400">- Build beautiful UIs</AnimatedSpan>
              <AnimatedSpan delay={2300} className="font-mono text-gray-400">- Animate everything</AnimatedSpan>
              <AnimatedSpan delay={2500} className="font-mono text-gray-400">- Make code readable</AnimatedSpan>
              <AnimatedSpan delay={2700} className="font-mono text-gray-400">- Ship fast 🚀</AnimatedSpan>
              <AnimatedSpan delay={2900} className="font-mono text-gray-200">$ bash deploy.sh</AnimatedSpan>
              <AnimatedSpan delay={3200} className="font-mono text-gray-400">[deploy] Building project...</AnimatedSpan>
              <AnimatedSpan delay={3500} className="font-mono text-gray-400">[deploy] Success! Portfolio is live.</AnimatedSpan>
              <AnimatedSpan delay={3800} className="font-mono text-gray-200">$ echo "Ready for new challenges!"</AnimatedSpan>
              <AnimatedSpan delay={4100} className="font-mono text-gray-400">Ready for new challenges!</AnimatedSpan>
            </div>
            {/* 3D Model (Right Side) with OrbitingCircles - hidden on small screens */}
            <div className="hidden md:flex flex-1 justify-center items-center min-w-[220px] max-w-[350px] w-full h-[220px] sm:h-[260px] md:h-[300px] lg:h-[340px] xl:h-[400px] relative">
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <OrbitingCircles radius={110} duration={18} />
              </div>
              <Canvas
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
