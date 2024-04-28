import { useThree } from "@react-three/fiber";
import { Text3D, Center } from "@react-three/drei";

export const Title = () => {
  const viewport = useThree(state => state.viewport);
  // 1.535
  return (
    <Center scale={viewport.width / 9}>
      <Text3D
        font="./fonts/Argesta.json"
        curveSegments={32}
        bevelEnabled
        bevelSize={0.04}
        bevelThickness={0.1}
        height={0.2}
        lineHeight={0.7}
        letterSpacing={0.08}
        size={1.25}
        position-y={0}
      >
        {`Cameron\nYoung`}
        <meshStandardMaterial />
      </Text3D>
    </Center>
  );
};
