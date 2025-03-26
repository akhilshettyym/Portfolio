"use client"

import { useRef } from "react"
import { useFrame } from "@react-three/fiber"
import { easing } from "maath"

const HeroCamera = ({ children, isMobile }) => {
  const groupRef = useRef()

  useFrame((state, delta) => {
    // Get mouse position from -1 to 1
    const mouseX = state.pointer.x
    const mouseY = state.pointer.y
    const mouseZ = state.pointer.z

    // Apply rotation based on mouse position
    // Using dampE for smooth transitions
    easing.dampE(
      groupRef.current.rotation,
      [
        -mouseY * 0.3, // Vertical rotation (look up/down)
        -mouseX * 0.5, // Horizontal rotation (look left/right)
        0,
      ],
      0.25, // Damping factor - lower = smoother
      delta,
    )
  })

  return <group ref={groupRef}>{children}</group>
}

export default HeroCamera;