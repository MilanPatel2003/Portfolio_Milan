import React, { useRef, useEffect, useState } from 'react';
import * as THREE from 'three';

const FluidAnimation: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    // Check if the device supports touch events
    const checkTouchSupport = () => {
      setIsTouchDevice('ontouchstart' in window || navigator.maxTouchPoints > 0);
    };

    checkTouchSupport();
    window.addEventListener('resize', checkTouchSupport);

    return () => {
      window.removeEventListener('resize', checkTouchSupport);
    };
  }, []);

  useEffect(() => {
    if (!containerRef.current || isTouchDevice) return;

    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    containerRef.current.appendChild(renderer.domElement);

    const geometry = new THREE.PlaneGeometry(2, 2);
    const material = new THREE.ShaderMaterial({
      uniforms: {
        time: { value: 0 },
        resolution: { value: new THREE.Vector2(window.innerWidth, window.innerHeight) },
        mouse: { value: new THREE.Vector2(0.5, 0.5) }
      },
      vertexShader: `
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform float time;
        uniform vec2 resolution;
        uniform vec2 mouse;
        varying vec2 vUv;

        #define PI 3.14159265359

        vec3 colorA = vec3(0.5, 0.0, 1.0);
        vec3 colorB = vec3(0.0, 1.0, 0.5);

        void main() {
          vec2 uv = (gl_FragCoord.xy - 0.5 * resolution.xy) / min(resolution.y, resolution.x);
          
          vec2 mouseUV = mouse * 2.0 - 1.0;
          float dist = length(uv - mouseUV);
          
          float t = time * 0.2;
          
          float wave = sin(dist * 10.0 - t * 2.0) * 0.5 + 0.5;
          wave *= exp(-dist * 3.0);
          
          vec3 color = mix(colorA, colorB, wave);
          
          float alpha = smoothstep(0.4, 0.0, dist);
          
          gl_FragColor = vec4(color, alpha * 0.7);
        }
      `,
      transparent: true,
      blending: THREE.AdditiveBlending,
    });

    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    const handleMouseMove = (event: MouseEvent) => {
      const x = event.clientX / window.innerWidth;
      const y = 1 - (event.clientY / window.innerHeight);
      (material.uniforms.mouse.value as THREE.Vector2).set(x, y);
    };

    window.addEventListener('mousemove', handleMouseMove);

    const animate = (time: number) => {
      requestAnimationFrame(animate);
      material.uniforms.time.value = time * 0.001;
      renderer.render(scene, camera);
    };

    animate(0);

    const handleResize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      renderer.setSize(width, height);
      material.uniforms.resolution.value.set(width, height);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      containerRef.current?.removeChild(renderer.domElement);
    };
  }, [isTouchDevice]);

  if (isTouchDevice) {
    return null; // Don't render anything for touch devices
  }

  return <div ref={containerRef} style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none', zIndex: 10 }} />;
};

export default FluidAnimation;
