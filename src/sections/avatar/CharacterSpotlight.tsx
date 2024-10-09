import { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader.js';
import { AnimationMixer, AnimationAction } from 'three';
import { motion, useInView } from 'framer-motion';
import GradualSpacing from '@/components/ui/gradual-spacing';

const Character = ({ animationUrl }: { animationUrl: string }) => {
  const fbx = useLoader(FBXLoader, '/models/Offensive Idle.fbx');
  const animationFbx = useLoader(FBXLoader, animationUrl);
  const mixerRef = useRef<AnimationMixer | null>(null);
  const actionRef = useRef<AnimationAction | null>(null);

  useEffect(() => {
    if (fbx && animationFbx) {
      mixerRef.current = new AnimationMixer(fbx);
      const animation = animationFbx.animations[0];
      if (animation) {
        actionRef.current = mixerRef.current.clipAction(animation);
        actionRef.current.play();
      }
    }
  }, [fbx, animationFbx]);

  useFrame((_, delta) => {
    mixerRef.current?.update(delta);
  });

  useEffect(() => {
    if (fbx) {
      fbx.position.set(0, -2, 0);
      fbx.scale.setScalar(1.7);
      fbx.rotation.y = Math.PI / 4;
    }
  }, [fbx]);

  return <primitive object={fbx} />;
};

const CharacterSpotlight = () => {
  const [currentAnimation, setCurrentAnimation] = useState('/models/Offensive Idle.fbx');
  const spotlightRef = useRef(null);
  const isInView = useInView(spotlightRef, { once: true, amount: 0.3 });

  const animations = [
    { name: 'Idle', url: '/models/Offensive Idle.fbx' },
    { name: 'Gangnam Style', url: '/models/Gangnam Style.fbx' },
    { name: 'Jumping', url: '/models/Jumping.fbx' },
    { name: 'Push Up', url: '/models/Push Up.fbx' },
    { name: 'Golf Drive', url: '/models/Golf Drive.fbx' },
    { name: 'Swimming', url: '/models/Swimming.fbx' },
    { name: 'Salsa Dancing', url: '/models/Salsa Dancing.fbx' },
    { name: 'Spell Casting', url: '/models/Spell Casting.fbx' },
  ];

  return (
    <motion.div 
      ref={spotlightRef}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full min-h-screen flex flex-col lg:flex-row"
    >
      <div className="w-full lg:w-1/2 p-4 lg:p-8 flex flex-col justify-center items-center lg:items-start text-white">
        <GradualSpacing 
          text="You've Made It This Far!" 
          className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-thin font-oxanium mb-4 text-center animate-gradient-x"
        />
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="text-base sm:text-lg lg:text-xl mb-8 text-center lg:text-left max-w-2xl"
        >
          Thanks for exploring my portfolio to the end. As a passionate developer, I'm always excited to take on new challenges and create engaging experiences. Whether you have a project in mind or just want to connect, I'd love to hear from you. Let's turn ideas into reality!
        </motion.p>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 gap-2 sm:gap-4 w-full max-w-2xl">
          {animations.map((anim) => (
            <button
              key={anim.name}
              onClick={() => setCurrentAnimation(anim.url)}
              className={`px-2 py-1 sm:px-4 sm:py-2 lg:px-6 lg:py-3 rounded-full text-xs sm:text-sm lg:text-base transition-all ${
                currentAnimation === anim.url
                  ? 'bg-white text-purple-900 shadow-lg transform scale-105'
                  : 'bg-purple-700 hover:bg-purple-600'
              }`}
            >
              {anim.name}
            </button>
          ))}
        </div>
      </div>
      <div className="w-full lg:w-1/2 h-[50vh] lg:h-auto relative">
        <Canvas shadows gl={{ alpha: true }} className="!absolute inset-0">
          <PerspectiveCamera makeDefault position={[0, 0, 5]} fov={50} />
          <ambientLight intensity={0.5} />
          <directionalLight color="#ffffff" intensity={1} position={[5, 5, 5]} />
          <Character animationUrl={currentAnimation} />
          <OrbitControls enableZoom={false} enablePan={false} />
        </Canvas>
      </div>
    </motion.div>
  );
};

export default CharacterSpotlight;