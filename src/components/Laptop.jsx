// import React from 'react';
// import { useGLTF, useTexture } from '@react-three/drei';
// import * as THREE from "three";

// const Laptop = (props) => {
//   const { nodes, materials } = useGLTF('/models/laptop.glb') || { nodes: {}, materials: {} };
//   const screenTexture = useTexture('/textures/test.jpg');

//   console.log("Nodes:", nodes); // Debugging: Check available nodes

//   return (
//     <group {...props} dispose={null}>
//       <group scale={0.01}>
//         <mesh
//           castShadow
//           receiveShadow
//           geometry={nodes?.Cube_Laptop_0?.geometry || new THREE.BufferGeometry()} // Prevent crash
//           material={materials?.Laptop}
//           rotation={[-Math.PI / 2, 0, 0]}
//           scale={100}
//         />
//         <mesh
//           castShadow
//           receiveShadow
//           geometry={nodes?.keys001_Rubber_0?.geometry || new THREE.BufferGeometry()}
//           material={materials?.Rubber}
//           rotation={[-Math.PI / 2, 0, 0]}
//           scale={[248.603, 248.603, 156.487]}
//         />
//         {/* Screen Mesh */}
//         <mesh
//           castShadow
//           receiveShadow
//           geometry={nodes?.Screen?.geometry || new THREE.BufferGeometry()} // Fix crash
//         >
//           <meshStandardMaterial map={screenTexture} />
//         </mesh>
//       </group>
//     </group>
//   );
// }

// useGLTF.preload('/models/laptop.glb');

// export default Laptop;