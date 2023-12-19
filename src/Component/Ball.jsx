import { Canvas } from "@react-three/fiber";
import { Sphere, OrbitControls, MeshDistortMaterial } from "@react-three/drei";
const Ball = () => {
  return (
    <Canvas camera={{ fov: 25, position: [0, 0, 9] }}>
      <OrbitControls enableZoom={false} />
      <ambientLight intensity={0.2} />
      <directionalLight position={[0, 0, 0]} />
      <OrbitControls enableZoom={false} />
      <ambientLight intensity={0.4} />
      <directionalLight position={[3, 2, 1]} />
      <Sphere args={[1, 100, 100]} scale={1} position={[0, 0, 0]}>
        <MeshDistortMaterial
          color="#eb0074"
          attach="material"
          distort={0.6}
          speed={2}
        />
      </Sphere>
    </Canvas>
  );
};

export default Ball;
