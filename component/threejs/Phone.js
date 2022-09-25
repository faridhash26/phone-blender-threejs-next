import React, { useRef, useLayoutEffect, useEffect } from "react";
import { useGLTF } from "@react-three/drei";
import THREE from "three";
import gsap from "gsap";

export const Phone = ({ currentColor }) => {
  const group = useRef();
  const { scene, nodes, materials } = useGLTF("/gltfs/phone.gltf");

  useEffect(() => {
    gsap.to(group.current.rotation, { y: Math.PI * 1.25, duration: 1 });
    gsap.to(group.current.position, { x: -15, duration: 1 });
    gsap.to(group.current.scale, { x: 0.7, y: 0.7, z: 0.7, duration: 1 });
  });
  return (
    <primitive
      ref={group}
      object={scene}
      // rotation-x={Math.PI * 0.25}
      // rotation-y={Math.PI * 0.8}
    />
  );
};
// useGLTF.preload("/gltfs/phone.gltf");
