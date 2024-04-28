import { Canvas } from "@react-three/fiber";
import { AsciiRenderer, Float } from "@react-three/drei";
import { Title } from "./Title.jsx";

export const WebGL = () => {
  return (
    <Canvas dpr={[1, 2]}>
      <color attach="background" args={["white"]} />

      <directionalLight position={[0, -10, 5]} />

      <Float speed={1} rotationIntensity={0.1} floatIntensity={0.25} floatingRange={[-0.25, 0.25]}>
        <Title />
      </Float>

      <AsciiRenderer
        fgColor="ivory"
        resolution={window.innerWidth > 640 ? 0.2 : 0.27}
        invert={false}
      />
    </Canvas>
  );
};
