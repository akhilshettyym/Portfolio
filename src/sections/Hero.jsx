import { Canvas } from "@react-three/fiber"
import { PerspectiveCamera } from "@react-three/drei"
import HackerRoom from "../components/HackerRoom"
import { Suspense } from "react"
import CanvasLoader from "../components/CanvasLoader"
import { useMediaQuery } from "react-responsive"
import HeroCamera from "../components/HeroCamera"
import Button from "../components/Button"
// import ReactLogo from "../components/ReactLogo";
// import Target from "../components/Target";
import Robo from "../components/Robo";
import Cuby from "../components/Cuby"
// import Laptop from "../components/laptop"

const Hero = () => {
  const isSmall = useMediaQuery({ query: "(max-width: 440px)" })
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" })
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 })

  // Increased sizes by 50%
  const sizes = {
    deskScale: isSmall ? 0.27 : isMobile ? 0.33 : isTablet ? 0.375 : 0.45,
    deskPosition: [0, 0, 0], // Center position
  }

  return (
    <section className="min-h-screen w-full flex flex-col relative">
      <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3">
        {/* waving hand and name  */}
        <p className="sm:text-3xl text-2xl font-medium text-white text-center font-generalsans">
          Hi, I am Akhil <span className="waving-hand">👋</span>
        </p>

        {/* Sub heading */}
        <p className="hero_tag text-gray_gradient">Building products and Brands</p>
      </div>

      {/* three.js canvas - fixed in place with more height */}
      <div className="w-full h-[80vh] absolute inset-0 top-[15%]">
        <Canvas className="w-full h-full">
          <Suspense fallback={<CanvasLoader />}>
            <PerspectiveCamera makeDefault position={[0, -0.6, 4]} />

            <HeroCamera>
              <HackerRoom position={[-0.3, 0, 0]} scale={sizes.deskScale} rotation={[0, Math.PI/2, 0]} /> 
            </HeroCamera>

            <group>
                
                <Robo position={[2.7, -2, 0]} scale={[0.1, 0.1, 0.1]} rotation={[0, 2.5, 0]} />
                <Cuby position={[2.5, 0.8, 0]} scale={[0.3, 0.3, 0.3]} rotation={[0, 6, 0]} />
                {/* <Laptop position={[-2.7, -2, 0]} scale={[0.5, 0.5, 0.5]} rotation={[0, 6, 0]} /> */}

                {/* <Target position={[-2.7, -3.5, 0]} scale={sizes.deskScale} /> */}
                {/* <ReactLogo position={sizes.reactLogoPosition}/> */}
                {/* <Cube position={sizes.cubePosition}/> */}
                {/* <Rings position={sizes.ringPosition}/> */}
            </group>

            <ambientLight intensity={2.5} />
            <directionalLight position={[10, 10, 10]} intensity={2} />
            <directionalLight position={[-10, -10, -10]} intensity={1} />
          </Suspense>
        </Canvas>
      </div>

      <div className="absolute bottom-7 left-0 right-0 w-full z-10 c-space">
        <a href="#contact" className="w-fit">
          <Button name="Let's work togather" isBeam containerClass="sm:w-fit w-full sm:min-w-96" />
        </a>
      </div>
    </section>
  )
}

export default Hero;