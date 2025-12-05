import { useEffect, useRef, useState } from 'react';
import type * as THREE from 'three';

interface GLBLoaderProps {
  modelPath: string;
}

export default function GLBLoader({ modelPath }: GLBLoaderProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadModel = async () => {
      try {
        if (!containerRef.current) return;

        setLoading(true);
        setError(null);

        // Dynamically import Three.js modules
        const THREE = await import('three');
        const { GLTFLoader } = await import('three/examples/jsm/loaders/GLTFLoader.js');

        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(
          50,
          containerRef.current.clientWidth / containerRef.current.clientHeight,
          0.1,
          1000
        );
        camera.position.set(0, 0, 3);

        const renderer = new THREE.WebGLRenderer({ 
          antialias: true, 
          alpha: true,
          precision: 'highp'
        });
        renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
        renderer.setClearColor(0x000000, 0);
        renderer.shadowMap.enabled = true;
        containerRef.current.appendChild(renderer.domElement);

        // Lighting
        const ambientLight = new THREE.AmbientLight(0x00ff41, 0.5);
        scene.add(ambientLight);

        const dirLight1 = new THREE.DirectionalLight(0x00ff41, 1.2);
        dirLight1.position.set(5, 5, 5);
        dirLight1.castShadow = true;
        scene.add(dirLight1);

        const dirLight2 = new THREE.DirectionalLight(0xff0040, 0.6);
        dirLight2.position.set(-5, -5, -5);
        scene.add(dirLight2);

        const pointLight = new THREE.PointLight(0x00ffff, 0.8);
        pointLight.position.set(0, 3, 2);
        scene.add(pointLight);

        // Load model
        const loader = new GLTFLoader();
        let model: THREE.Group | null = null;

        try {
          const gltf = await new Promise((resolve: (value: any) => void, reject) => {
            loader.load(
              modelPath,
              resolve,
              undefined,
              reject
            );
          });
          
          model = gltf.scene as THREE.Group;
          scene.add(model);
          model.scale.set(1.2, 1.2, 1.2);

          setLoading(false);
        } catch (loadError) {
          console.warn(`Failed to load ${modelPath}:`, loadError);
          setError(`Could not load model: ${modelPath}`);
          setLoading(false);
          return;
        }

        // Animation loop
        const animate = () => {
          requestAnimationFrame(animate);

          if (model) {
            model.rotation.y += 0.003;
            model.position.y = Math.sin(Date.now() * 0.0005) * 0.15;
          }

          renderer.render(scene, camera);
        };
        animate();

        // Handle resize
        const handleResize = () => {
          if (!containerRef.current) return;
          const width = containerRef.current.clientWidth;
          const height = containerRef.current.clientHeight;
          camera.aspect = width / height;
          camera.updateProjectionMatrix();
          renderer.setSize(width, height);
        };

        window.addEventListener('resize', handleResize);

        return () => {
          window.removeEventListener('resize', handleResize);
          containerRef.current?.removeChild(renderer.domElement);
          renderer.dispose();
        };
      } catch (err) {
        console.error('GLBLoader Error:', err);
        setError('Error loading 3D model');
        setLoading(false);
      }
    };

    loadModel();
  }, [modelPath]);

  return (
    <div 
      ref={containerRef} 
      className="w-full h-full"
      style={{ position: 'relative' }}
    >
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/20 rounded">
          <div className="font-arcade text-xs text-primary/60 text-center">
            [LOADING MODEL]
            <br />
            <span className="text-secondary text-glow">INITIALIZING...</span>
          </div>
        </div>
      )}
      {error && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/20 rounded">
          <div className="font-arcade text-xs text-secondary text-center">
            [ERROR]
            <br />
            <span className="text-primary/60">{error}</span>
          </div>
        </div>
      )}
    </div>
  );
}