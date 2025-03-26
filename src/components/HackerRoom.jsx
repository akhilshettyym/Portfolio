"use client"

import { useRef } from "react"
import { useGLTF, useTexture } from "@react-three/drei"

const HackerRoom = (props) => {
  const { nodes, materials } = useGLTF("/models/hacker-room.glb")
  const modelRef = useRef()

  const monitortxt = useTexture("textures/desk/monitor.png")
  const screenTxt = useTexture("textures/desk/screen.png")

  return (
    <group {...props} ref={modelRef} dispose={null}>
      <group scale={0.01}>
        <group position={[-25.4, -135.127, 186.97]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh castShadow receiveShadow geometry={nodes.cable023_Main_0.geometry} material={materials.Main} />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder138_Main_0.geometry}
            material={materials.Main}
            position={[-0.484, -0.221, -0.2]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder140_Main_0.geometry}
            material={materials.Main}
            position={[-0.12, -0.268, -0.013]}
          />
        </group>
        <group position={[-28.715, -139.589, 196.853]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh castShadow receiveShadow geometry={nodes.cable024_Main_0.geometry} material={materials.Main} />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder137_Main_0.geometry}
            material={materials.Main}
            position={[-0.155, -0.279, -0.066]}
          />
        </group>
        <group position={[260.734, -411.677, 165.877]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh castShadow receiveShadow geometry={nodes.cable037_Main_0.geometry} material={materials.Main} />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder135_Main_0.geometry}
            material={materials.Main}
            position={[0.097, -0.097, 0.004]}
          />
        </group>
        <group position={[257.548, -428.844, -50.57]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh castShadow receiveShadow geometry={nodes.cable040_Main_0.geometry} material={materials.Main} />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder136_Main_0.geometry}
            material={materials.Main}
            position={[-0.086, 0.076, 0.028]}
          />
        </group>
        <group position={[272.945, -404.957, -59.792]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh castShadow receiveShadow geometry={nodes.cable041_Main_0.geometry} material={materials.Main} />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder141_Main_0.geometry}
            material={materials.Main}
            position={[-0.486, 0.138, 0.102]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder142_Main_0.geometry}
            material={materials.Main}
            position={[-0.029, 0.133, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder143_Main_0.geometry}
            material={materials.Main}
            position={[0.436, 0.013, -0.07]}
          />
        </group>
        <group position={[61.725, -139.153, -61.001]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh castShadow receiveShadow geometry={nodes.Cable_Mass014_Main_0.geometry} material={materials.Main} />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder076_01001_Main_0.geometry}
            material={materials.Main}
            position={[0.07, -0.263, 0.503]}
            rotation={[0, 0.001, 0.002]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder076_03001_Main_0.geometry}
            material={materials.Main}
            position={[-0.135, -0.259, 0.514]}
            rotation={[0, -0.002, -0.004]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder076_05001_Main_0.geometry}
            material={materials.Main}
            position={[-0.023, -0.265, 0.511]}
            rotation={[0, -0.002, -0.004]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder076_07001_Main_0.geometry}
            material={materials.Main}
            position={[0.188, -0.261, 0.499]}
          />
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube012_Main_0.geometry}
          material={materials.Main}
          position={[23.141, -40.836, 77.072]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube013_glass_0.geometry}
          material={materials.glass}
          position={[-7.649, -20.758, 43.816]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube014_Main_0.geometry}
          material={materials.Main}
          position={[-7.193, -77.229, 26.74]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube015_Main_0.geometry}
          material={materials.Main}
          position={[-9.708, -20.758, 43.816]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube016_Main_0.geometry}
          material={materials.Main}
          position={[46.482, -29.07, 59.188]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder077_Main_0.geometry}
          material={materials.Main}
          position={[-14.545, 3.696, 127.131]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder078_Main_0.geometry}
          material={materials.Main}
          position={[-14.545, -17.442, 127.131]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder079_Main_0.geometry}
          material={materials.Main}
          position={[-17.502, -65.159, 126.582]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane013_Main_0.geometry}
          material={materials.Main}
          position={[-117.307, -166.454, 123.36]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder080_Main_0.geometry}
          material={materials.Main}
          position={[290.653, -283.153, 63.552]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube017_Main_0.geometry}
          material={materials.Main}
          position={[-9.669, -77.284, 83.262]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder081_Main_0.geometry}
          material={materials.Main}
          position={[297.801, -287.259, 63.552]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane014_Main_0.geometry}
          material={materials.Main}
          position={[-159.793, -161.653, 64.33]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane015_Main_0.geometry}
          material={materials.Main}
          position={[-105.822, -161.017, 41.938]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane016_Main_0.geometry}
          material={materials.Main}
          position={[-119.322, -161.017, 41.938]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane017_Main_0.geometry}
          material={materials.Main}
          position={[-132.821, -161.017, 41.938]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane018_Main_0.geometry}
          material={materials.Main}
          position={[-146.321, -161.017, 41.938]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane019_Main_0.geometry}
          material={materials.Main}
          position={[-159.821, -161.017, -3.049]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane020_Main_0.geometry}
          material={materials.Main}
          position={[-159.607, -161.017, 144.558]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane021_Main_0.geometry}
          material={materials.Main}
          position={[-146.321, -161.017, 144.514]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane022_Main_0.geometry}
          material={materials.Main}
          position={[-105.822, -161.017, 144.201]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane023_Main_0.geometry}
          material={materials.Main}
          position={[-119.322, -161.017, 144.201]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder082_Main_0.geometry}
          material={materials.Main}
          position={[159.612, -0.452, 17.583]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder083_Main_0.geometry}
          material={materials.Main}
          position={[151.046, -0.452, 17.583]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder084_glass_0.geometry}
          material={materials.glass}
          position={[151.046, -0.452, 17.583]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder085_Main_0.geometry}
          material={materials.Main}
          position={[159.612, -29.522, 17.583]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder086_Main_0.geometry}
          material={materials.Main}
          position={[151.046, -29.522, 17.583]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder087_glass_0.geometry}
          material={materials.glass}
          position={[151.046, -29.522, 17.583]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder088_Main_0.geometry}
          material={materials.Main}
          position={[159.612, -58.734, 17.583]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder089_Main_0.geometry}
          material={materials.Main}
          position={[151.046, -58.734, 17.583]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder090_glass_0.geometry}
          material={materials.glass}
          position={[151.046, -58.734, 17.583]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder091_Main_0.geometry}
          material={materials.Main}
          position={[159.612, -0.452, 44.537]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder092_Main_0.geometry}
          material={materials.Main}
          position={[151.046, -0.452, 44.537]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder093_glass_0.geometry}
          material={materials.glass}
          position={[151.046, -0.452, 44.537]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder094_Main_0.geometry}
          material={materials.Main}
          position={[159.612, -29.522, 44.537]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder095_Main_0.geometry}
          material={materials.Main}
          position={[151.046, -29.522, 44.537]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder096_glass_0.geometry}
          material={materials.glass}
          position={[151.046, -29.522, 44.537]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder097_Main_0.geometry}
          material={materials.Main}
          position={[159.612, -58.734, 44.537]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder098_Main_0.geometry}
          material={materials.Main}
          position={[151.046, -58.734, 44.537]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder099_glass_0.geometry}
          material={materials.glass}
          position={[151.046, -58.734, 44.537]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder100_Main_0.geometry}
          material={materials.Main}
          position={[159.612, -0.452, 71.49]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder101_Main_0.geometry}
          material={materials.Main}
          position={[151.046, -0.452, 71.49]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder102_glass_0.geometry}
          material={materials.glass}
          position={[151.046, -0.452, 71.49]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder103_Main_0.geometry}
          material={materials.Main}
          position={[159.612, -29.522, 71.49]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder104_Main_0.geometry}
          material={materials.Main}
          position={[151.046, -29.522, 71.49]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder105_glass_0.geometry}
          material={materials.glass}
          position={[151.046, -29.522, 71.49]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder106_Main_0.geometry}
          material={materials.Main}
          position={[159.612, -58.734, 71.49]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder107_Main_0.geometry}
          material={materials.Main}
          position={[151.046, -58.734, 71.49]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder108_glass_0.geometry}
          material={materials.glass}
          position={[151.046, -58.734, 71.49]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube018_Main_0.geometry}
          material={materials.Main}
          position={[155.551, -28.664, 102.644]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder109_Main_0.geometry}
          material={materials.Main}
          position={[157.664, -5.17, 102.49]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder110_Main_0.geometry}
          material={materials.Main}
          position={[157.664, -20.88, 102.49]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder111_Main_0.geometry}
          material={materials.Main}
          position={[157.664, -36.589, 102.49]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder112_Main_0.geometry}
          material={materials.Main}
          position={[157.664, -52.298, 102.49]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube019_Main_0.geometry}
          material={materials.Main}
          position={[-9.669, -37.15, 124.45]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder113_Main_0.geometry}
          material={materials.Main}
          position={[221.141, -324.394, 63.328]}
          rotation={[-Math.PI / 2, -Math.PI / 2, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder114_Main_0.geometry}
          material={materials.Main}
          position={[221.141, -347.125, 63.328]}
          rotation={[-Math.PI / 2, -Math.PI / 2, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder115_Main_0.geometry}
          material={materials.Main}
          position={[221.141, -370.037, 63.328]}
          rotation={[-Math.PI / 2, -Math.PI / 2, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder116_Main_0.geometry}
          material={materials.Main}
          position={[297.801, -380.477, 63.552]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder117_Main_0.geometry}
          material={materials.Main}
          position={[297.801, -351.638, 63.552]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder118_Main_0.geometry}
          material={materials.Main}
          position={[297.801, -322.799, 63.552]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder119_Main_0.geometry}
          material={materials.Main}
          position={[297.801, -293.96, 63.552]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder120_Main_0.geometry}
          material={materials.Main}
          position={[297.801, -265.121, 63.552]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder121_Main_0.geometry}
          material={materials.Main}
          position={[297.801, -236.282, 63.552]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder122_Main_0.geometry}
          material={materials.Main}
          position={[297.801, -207.443, 63.552]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane024_Main_0.geometry}
          material={materials.Main}
          position={[53.029, -125.992, 56.163]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cable025_Main_0.geometry}
          material={materials.Main}
          position={[-18.095, -144.377, 191.44]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder123_Main_0.geometry}
          material={materials.Main}
          position={[28.411, -149.278, 158.522]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder124_Main_0.geometry}
          material={materials.Main}
          position={[28.411, -149.278, -48.755]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube020_Main_0.geometry}
          material={materials.Main}
          position={[53.042, -153.821, 42.273]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube021_Main_0.geometry}
          material={materials.Main}
          position={[94.11, -361.79, 52.962]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder125_Main_0.geometry}
          material={materials.Main}
          position={[-14.545, -151.076, -3.144]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder126_Main_0.geometry}
          material={materials.Main}
          position={[-14.545, -151.076, 15.482]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder127_Main_0.geometry}
          material={materials.Main}
          position={[-14.545, -151.076, 34.108]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube022_Main_0.geometry}
          material={materials.Main}
          position={[-9.865, -151.81, 82.792]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cable026_Main_0.geometry}
          material={materials.Main}
          position={[185.855, -95.942, 84.452]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cable027_Main_0.geometry}
          material={materials.Main}
          position={[187.66, -92.566, 75.111]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cable028_Main_0.geometry}
          material={materials.Main}
          position={[187.075, -77.608, 71.589]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cable029_Main_0.geometry}
          material={materials.Main}
          position={[186.419, -108.391, 89.16]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cable030_Main_0.geometry}
          material={materials.Main}
          position={[254.502, -435.345, 63.552]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder128_Main_0.geometry}
          material={materials.Main}
          position={[133.531, -392.303, 52.962]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Vert003_Main_0.geometry}
          material={materials.Main}
          position={[54.695, -374.023, 52.962]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Vert004_Main_0.geometry}
          material={materials.Main}
          position={[104.779, -372.273, 52.962]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder129_Main_0.geometry}
          material={materials.Main}
          position={[32.049, -414.03, 52.962]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cable031_Main_0.geometry}
          material={materials.Main}
          position={[236.934, -414.181, 154.282]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cable032_Main_0.geometry}
          material={materials.Main}
          position={[241.822, -443.557, 63.552]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cable033_Main_0.geometry}
          material={materials.Main}
          position={[251.821, -445.897, 63.552]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cable034_Main_0.geometry}
          material={materials.Main}
          position={[225.571, -437.572, -48.424]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cable035_Main_0.geometry}
          material={materials.Main}
          position={[264.907, -404.475, 160.071]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cable036_Main_0.geometry}
          material={materials.Main}
          position={[252.292, -414.31, 162.035]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cable038_Main_0.geometry}
          material={materials.Main}
          position={[238.768, -432.28, 176.328]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cable039_Main_0.geometry}
          material={materials.Main}
          position={[264.353, -413.025, -58.059]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cable042_Main_0.geometry}
          material={materials.Main}
          position={[239.579, -413.872, -48.75]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder130_Main_0.geometry}
          material={materials.Main}
          position={[297.782, -185.868, 61.633]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder131_Main_0.geometry}
          material={materials.Main}
          position={[297.782, -396.5, 61.633]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder144_Main_0.geometry}
          material={materials.Main}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder076_02001_Main_0.geometry}
          material={materials.Main}
          position={[73.257, -152.699, -19.475]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder076_04001_Main_0.geometry}
          material={materials.Main}
          position={[45.989, -153.381, -17.563]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder076_06001_Main_0.geometry}
          material={materials.Main}
          position={[54.422, -152.898, -17.028]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder076_08001_Main_0.geometry}
          material={materials.Main}
          position={[63.777, -153.095, -16.605]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Insulate003_Main_0.geometry}
          material={materials.Main}
          position={[62.576, -128.44, -77.249]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Insulate004_Main_0.geometry}
          material={materials.Main}
          position={[15.659, -122.772, 195.607]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cable043_Main_0.geometry}
          material={materials.Main}
          position={[183.737, -241.573, 64.405]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cable044_Main_0.geometry}
          material={materials.Main}
          position={[178.889, -259.622, 93.393]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cable045_Main_0.geometry}
          material={materials.Main}
          position={[169.366, -269.628, 37.877]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder076_07003_01001_Main_0.geometry}
          material={materials.Main}
          position={[97.479, -152.301, 59.366]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Vert005_Main_0.geometry}
          material={materials.Main}
          position={[67.567, -333.518, 52.962]}
          rotation={[-Math.PI / 2, -0.567, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder145_Main_0.geometry}
          material={materials.Main}
          position={[112.287, -340.754, 52.962]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder146_Main_0.geometry}
          material={materials.Main}
          position={[96.679, -381.832, 52.962]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder147_Main_0.geometry}
          material={materials.Main}
          position={[32.049, -352.797, 52.962]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Insulate005_Main_0.geometry}
          material={materials.Main}
          position={[-99.946, -167.606, 188.289]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder149_Main_0.geometry}
          material={materials.Main}
          position={[74.695, -408.166, 52.962]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder150_Main_0.geometry}
          material={materials.Main}
          position={[357.89, -403.471, 63.552]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder151_Main_0.geometry}
          material={materials.Main}
          position={[348.488, -403.471, 63.552]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder152_Main_0.geometry}
          material={materials.Main}
          position={[339.13, -403.471, 63.552]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube023_Main_0.geometry}
          material={materials.Main}
          position={[146.802, -396.909, 52.962]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Vert006_Main_0.geometry}
          material={materials.Main}
          position={[89.712, -289.183, 6.069]}
          rotation={[-Math.PI / 2, 0.99, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Vert007_Main_0.geometry}
          material={materials.Main}
          position={[111.615, -362.298, 1.957]}
          rotation={[-Math.PI / 2, 0.99, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Vert008_Main_0.geometry}
          material={materials.Main}
          position={[89.762, -310.921, 6.643]}
          rotation={[-Math.PI / 2, 0.423, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Vert010_Main_0.geometry}
          material={materials.Main}
          position={[76.641, -380.975, 0.588]}
          rotation={[-Math.PI / 2, 0.423, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Vert022_Main_0.geometry}
          material={materials.Main}
          position={[47.734, -432.773, 9.251]}
          rotation={[-Math.PI / 2, 0.99, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Vert009_Main_0.geometry}
          material={materials.Main}
          position={[27.477, -372.288, 0.588]}
          rotation={[-Math.PI / 2, -0.053, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Vert011_Main_0.geometry}
          material={materials.Main}
          position={[40.39, -372.288, 0.588]}
          rotation={[-Math.PI / 2, -0.053, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Vert012_Main_0.geometry}
          material={materials.Main}
          position={[53.687, -372.288, 0.588]}
          rotation={[-Math.PI / 2, -0.053, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder076_07003_01002_Main_0.geometry}
          material={materials.Main}
          position={[97.479, -152.301, 59.366]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder076_07003_01003_Main_0.geometry}
          material={materials.Main}
          position={[89.998, -154.189, 35.327]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder065_glass_0.geometry}
          material={materials.glass}
          position={[297.782, -292.606, 61.633]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane025_Main_0.geometry}
          material={materials.Main}
          position={[-30.676, -173.038, -98.032]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
      </group>
    </group>
  )
}

useGLTF.preload("/models/hacker-room.glb")

export default HackerRoom;