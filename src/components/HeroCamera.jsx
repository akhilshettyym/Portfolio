"use client"

import { useRef, useEffect } from "react"
import { useFrame, useThree } from "@react-three/fiber"
import { easing } from "maath"

const HeroCamera = ({ children, syncWithMouse = false }) => {
  const groupRef = useRef()
  const { pointer, viewport } = useThree()
  const mouseRef = useRef({ x: 0, y: 0 })

  // Track mouse position globally
  useEffect(() => {
    const handleMouseMove = (event) => {
      // Convert screen coordinates to normalized coordinates (-1 to 1)
      mouseRef.current.x = (event.clientX / window.innerWidth) * 2 - 1
      mouseRef.current.y = -(event.clientY / window.innerHeight) * 2 + 1
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  useFrame((state, delta) => {
    // Use the globally tracked mouse position instead of just the canvas pointer
    const mouseX = mouseRef.current.x
    const mouseY = mouseRef.current.y

    if (syncWithMouse) {
      // Apply rotation based on mouse position
      // Using dampE for smooth transitions
      // When mouse is on left side, model faces left (positive rotation)
      // When mouse is on right side, model faces right (negative rotation)
      easing.dampE(
        groupRef.current.rotation,
        [
          -mouseY * 0.3, // Vertical rotation (look up/down)
          mouseX * 0.5, // Horizontal rotation - reversed to match mouse direction
          0,
        ],
        0.25, // Damping factor - lower = smoother
        delta,
      )
    } else {
      // Original behavior
      easing.dampE(groupRef.current.rotation, [-mouseY * 0.3, -mouseX * 0.5, 0], 0.25, delta)
    }
  })

  return <group ref={groupRef}>{children}</group>
}

export default HeroCamera

