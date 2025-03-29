import { Canvas } from "@react-three/fiber"
import { PerspectiveCamera } from "@react-three/drei"
import HackerRoom from "../components/HackerRoom"
import { Suspense } from "react"
import CanvasLoader from "../components/CanvasLoader"
import { useMediaQuery } from "react-responsive"
import HeroCamera from "../components/HeroCamera"
import Button from "../components/Button"
import Robo from "../components/Robo"
import Cuby from "../components/Cuby"

const Hero = () => {
  const isSmall = useMediaQuery({ query: "(max-width: 440px)" })
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" })
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 })

  const sizes = {
    deskScale: isSmall ? 0.27 : isMobile ? 0.33 : isTablet ? 0.375 : 0.45,
    deskPosition: [0, 0, 0],
  }

  return (
    <section className="min-h-screen w-full flex flex-col relative">
      <div className="w-full h-full flex lg:flex-row flex-col items-center">
        {/* Left side - Text content */}
        <div className="lg:w-1/2 w-full lg:h-screen flex flex-col justify-center lg:pl-16 px-5 pt-28 lg:pt-0 z-10">
          <h1 className="text-xs font-thin mb-1 text-gray-600">
            <span>Akhil Shetty M</span>
          </h1>

          <div className="changing-title-container mb-6">
            <p className="changing-title text-lg md:text-xl">
              Tech Enthusiast | FullStack Developer | UI/UX Designer | Graphic designer
            </p>
          </div>

          <div className="space-y-6 mb-8">
            <p className="text-white-600 text-base md:text-lg max-w-xl leading-relaxed text-justify">
              Passionate about building seamless digital experiences. From developing{" "}
              <span className="font-semibold text-white">real-time communication systems</span> to crafting{" "}
              <span className="font-semibold text-white">immersive web applications</span>, I blend creativity with
              technology. Former{" "}
              <span className="font-semibold text-white">Stage & Venue Committee Head at TEDxSJEC</span>, I thrive in
              leadership and innovation. Currently exploring{" "}
              <span className="font-semibold text-white">
                NextJs, React, ThreeJs, Firebase, and AI-driven applications
              </span>{" "}
              while working on my next big project.
            </p>

            <p className="text-white-700 text-lg font-medium">
              🚀 Always building, always learning.
              <a href="#projects" className="text-white hover:text-white-800 ml-2 inline-flex items-center group">
                Check out what I'm working on
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 ml-1 transition-transform group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </p>
          </div>

          <div className="mt-4">
            <a href="#contact">
              <Button name="Let's work together" isBeam containerClass="w-fit" />
            </a>
          </div>
        </div>

        {/* Right side - 3D Model */}
        <div className="lg:w-1/2 w-full h-[60vh] lg:h-screen relative">
          <Canvas className="w-full h-full">
            <Suspense fallback={<CanvasLoader />}>
              <PerspectiveCamera makeDefault position={[0, -0.6, 4]} />

              <HeroCamera syncWithMouse={true}>
                <HackerRoom position={[-0.3, 0.3, 0]} scale={sizes.deskScale} rotation={[0, Math.PI / 2, 0]} />
              </HeroCamera>

              <group>
                {/* <Robo position={[2.7, -2, 0]} scale={[0.1, 0.1, 0.1]} rotation={[0, 2.5, 0]} /> */}
                <Cuby position={[-2, -2, 0]} scale={[0.3, 0.3, 0.3]} rotation={[0, 6, 0]} />
              </group>

              <ambientLight intensity={2.5} />
              <directionalLight position={[10, 10, 10]} intensity={2} />
              <directionalLight position={[-10, -10, -10]} intensity={1} />
            </Suspense>
          </Canvas>
        </div>
      </div>

      {/* Invisible overlay to capture mouse events across the entire screen */}
      <div className="fixed inset-0 pointer-events-auto" style={{ zIndex: -1 }}></div>
    </section>
  )
}

export default Hero

