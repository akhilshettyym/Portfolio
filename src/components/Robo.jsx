import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const Robo = (props) => {
  const { nodes, materials } = useGLTF('/models/robo.glb');
  const roboRef = useRef(); // Ref for animation

  useGSAP(() => {
    gsap.to(roboRef.current.position, {
      y: "+=0.5", // Moves up by 0.5 units
      duration: 1.5,
      repeat: -1,
      yoyo: true,
    });
  });

  return (
    <group ref={roboRef} {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh castShadow receiveShadow geometry={nodes.Object_2.geometry} material={materials.material} />
        <mesh castShadow receiveShadow geometry={nodes.Object_3.geometry} material={materials.material_1} />
        <mesh castShadow receiveShadow geometry={nodes.Object_4.geometry} material={materials.material_2} />
        <mesh castShadow receiveShadow geometry={nodes.Object_5.geometry} material={materials.m7_ref} />
      </group>
    </group>
  );
};

useGLTF.preload('/models/robo.glb');

export default Robo;