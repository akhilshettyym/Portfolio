import React, { useRef, useState } from 'react';
import { useGLTF } from '@react-three/drei';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const Cuby = (props) => {
  const { nodes, materials } = useGLTF('/models/cuby.glb');
  const cubeRef = useRef();
  const [hovered, setHovered] = useState(false);

  useGSAP(() => {
    gsap
      .timeline({
        repeat: -1,
        repeatDelay: 0.5,
      })
      .to(cubeRef.current.rotation, {
        y: hovered ? '+=2' : `+=${Math.PI * 2}`,
        x: hovered ? '+=2' : `-=${Math.PI * 2}`,
        duration: 2.5,
        stagger: { each: 0.15 },
      });
  });

  return (
    <group {...props} dispose={null}>
      <group scale={0.01}>
        <mesh
          ref={cubeRef}
          castShadow
          receiveShadow
          geometry={nodes.Mesh_0_Material_0_0.geometry}
          material={materials.Material_0}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
          onPointerEnter={() => setHovered(true)}
          onPointerLeave={() => setHovered(false)}
        />
      </group>
    </group>
  );
};

useGLTF.preload('/models/cuby.glb');

export default Cuby;