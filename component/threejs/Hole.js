import { Suspense } from "react";

import { Canvas } from "@react-three/fiber";
import {
  Environment,
  OrthographicCamera,
  OrbitControls,
} from "@react-three/drei";

import { Phone } from "./Phone";
const Hole = () => {
  return (
    <Canvas>
      <ambientLight />
      <pointLight position={[0, 20, 10]} intensity={1.5} />

      <Suspense fallback={null}>
        <Phone />
      </Suspense>
      <OrthographicCamera
        makeDefault
        far={100}
        near={0.1}
        position={[-10, 2, -10]}
        zoom={20}
      />
      <OrbitControls enableZoom={true} />
    </Canvas>
  );
};

export default Hole;
