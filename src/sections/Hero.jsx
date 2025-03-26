import { Canvas } from "@react-three/fiber"
import { PerspectiveCamera } from "@react-three/drei"
import HackerRoom from "../components/HackerRoom"
import { Suspense } from "react"
import CanvasLoader from "../components/CanvasLoader"
// import { Leva, useControls} from "leva"
import { useMediaQuery } from "react-responsive"
import { calculateSizes } from "../constants/index"
import Target from "../components/Target"
import ReactLogo from "../components/ReactLogo"
import Cube from "../components/Cube"
import Rings from "../components/Ring"

const Hero = () => {
        const isSmall = useMediaQuery({ query: "(max-width: 440px)"})
        const isMobile = useMediaQuery({ query: "(max-width: 768px)" })
        const isTablet = useMediaQuery({minWidth:768, maxWidth:1024})

        const sizes = calculateSizes(isSmall, isMobile, isTablet);
        return (
        <section className="min-h-screen w-full flex flex-col relative">
        <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3">

        {/* waving hand and name  */}
        <p className="sm:text-3xl text-2xl font-medium text-white text-center font-generalsans">Hi, I am Akhil <span className="waving-hand">👋</span></p>

        {/* Sub heading */}
        <p className="hero_tag text-gray_gradient">Building products and Brands</p>
        </div>


        {/* three */}
        <div className="w-full h-full absolute inset-0">

        {/* <leva /> */}
        <Canvas className="w-full h-full">

            <Suspense fallback={CanvasLoader}>

            <PerspectiveCamera makeDefault position={[0, 0, 20]} />
            
            <HackerRoom 
            position={sizes.deskPosition}
            scale={sizes.deskScale}
            rotation={[0, -Math.PI, 0]}/>

            <group>
                <Target position={sizes.targetPosition}/>
                <ReactLogo position={sizes.reactLogoPosition}/>
                <Cube position={sizes.cubePosition}/>
                <Rings position={sizes.ringPosition}/>
            </group>

            <ambientLight intensity={1} />
            <directionalLight position={[10, 10, 10]} intensity={0.5} />

            </Suspense>
        </Canvas>



        </div>
    </section>
  )
}

export default Hero
