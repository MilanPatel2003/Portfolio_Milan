import { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader.js';
import { AnimationMixer, AnimationAction } from 'three';

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
    <div className="w-full h-screen flex">
      <div className="w-1/2 p-8 flex flex-col justify-center items-start text-white">
        <h2 className="text-4xl font-bold mb-4">You've Made It This Far!</h2>
        <p className="text-xl mb-8">
          Congratulations on reaching the end of my portfolio. As you've seen, I'm a passionate developer
          with a knack for creating engaging experiences. Let's build something amazing together!
        </p>
        <div className="space-y-4">
          {animations.map((anim) => (
            <button
              key={anim.name}
              onClick={() => setCurrentAnimation(anim.url)}
              className={`px-6 py-3 rounded-full text-lg transition-all ${
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
      <div className="w-1/2 relative">
        <Canvas shadows gl={{ alpha: true }} className="!absolute inset-0">
          <PerspectiveCamera makeDefault position={[0, 0, 5]} fov={50} />
          <ambientLight intensity={0.5} />
          <directionalLight color="#ffffff" intensity={1} position={[5, 5, 5]} />
          <Character animationUrl={currentAnimation} />
          <OrbitControls enableZoom={false} enablePan={false} />
        </Canvas>
      </div>
    </div>
  );
};

export default CharacterSpotlight;