import React, { useRef, useEffect, Suspense } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { useAnimations, PerspectiveCamera, useProgress, Html } from "@react-three/drei";
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { InteractiveHoverButton } from "@/components/magicui/interactive-hover-button";
import { Object3D } from 'three';
import { Terminal, TypingAnimation, AnimatedSpan } from "@/components/magicui/terminal";
// import { OrbitingSkills } from "./orbit";
import About from "./About";
import Skills from "./Skills";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";

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
    <section className="flex flex-col items-center justify-start p-4 sm:p-6 md:p-8 lg:p-10 mt-28">
      <div className="w-full flex flex-col lg:flex-row items-center justify-center mb-8">
        <div className="w-full lg:w-1/2 h-[250px] sm:h-[300px] md:h-[350px] lg:h-[300px] xl|h-[500px] relative mt-16 sm:mt-20 lg:mt-0">
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
          {/* <div className="absolute inset-0 pointer-events-none z-10">
            <OrbitingSkills />
          </div> */}
        </div>
        <div className="w-full lg:w-1/2 lg:pl-8 mt-6 lg:mt-0">
        <TypewriterEffectSmooth words={words} className="w-fit"/>

          <Terminal className="bg-transparent">
            <TypingAnimation>
              &gt; Welcome to my portfolio!
            </TypingAnimation>
            <AnimatedSpan delay={1500} className="text-gray-300">
              ✔ Loading personal information...
            </AnimatedSpan>
            <AnimatedSpan delay={2000} className="text-gray-300">
              ✔ Initializing 3D model...
            </AnimatedSpan>
            <AnimatedSpan delay={2500} className="text-gray-300">
              ✔ Setting up interactive elements...
            </AnimatedSpan>
            <AnimatedSpan delay={3000} className="text-gray-300">
              ✔ Loading skills and experience...
            </AnimatedSpan>
            <AnimatedSpan delay={3500} className="text-gray-300">
              ✔ Portfolio modules loaded.
            </AnimatedSpan>
            <AnimatedSpan delay={3000} className="text-gray-300">
              ✔ Projects fetched successfully.
            </AnimatedSpan>
            <AnimatedSpan delay={4500} className="text-gray-300">
              ✔ Contact form initialized.
            </AnimatedSpan>
            <AnimatedSpan delay={5000} className="text-gray-300">
              ✔ UI animations ready.
            </AnimatedSpan>
            <AnimatedSpan delay={5500} className="text-gray-300">
              ✔ All systems operational.
            </AnimatedSpan>
            <AnimatedSpan delay={6000} className="animate-gradient-x">
              ℹ System Status:
              - 3D Model: Active
              - Skills Orbit: Running
              - Portfolio: Ready
            </AnimatedSpan>
          </Terminal>
       
          <InteractiveHoverButton className="mt-5">
                <a
            href="/Milans_latest_Resume.pdf"
            download
          >
            Download Resume
          </a> 
          </InteractiveHoverButton>
        </div>
      </div>
      <div className="w-full">
        <About />
        <Skills />
      </div>
    </section>
  );
}
