import { Canvas, useFrame } from "@react-three/fiber"
import {
  FirstPersonControls,
  OrbitControls,
  GizmoHelper,
  GizmoViewcube,
  GizmoViewport,
  useHelper,
} from "@react-three/drei"
import { use, useRef } from "react"
import { useControls } from "leva"
import { SpotLightHelper } from "three"
import "./App.css"

function App() {
  const BoxAnimation = () => {
    const boxRef = useRef(null)
    const { color, speed } = useControls({
      color: "gold",
      speed: {
        value: 0.005,
        min: 0,
        max: 0.1,
        step: 0.005,
      },
    })
    useFrame(() => {
      // @ts-expect-error - current.rotation is not recognized on MeshRef type
      boxRef.current.rotation.x += speed
      // @ts-expect-error - current.rotation is not recognized on MeshRef type
      boxRef.current.rotation.y += speed
      // @ts-expect-error - current.rotation is not recognized on MeshRef type
      boxRef.current.rotation.z += speed
    })
    return (
      <mesh
        // position={[-2, 2, 1]}
        // rotation={[0, 0, 5]}
        // scale={[2, 2, 2]}
        ref={boxRef}
      >
        <axesHelper args={[2]} />
        {/* <sphereGeometry args={[2, 80, 80]} /> */}
        {/* <torusKnotGeometry args={[1.3, 0.3, 256, 256]} /> */}
        <boxGeometry args={[2, 3, 2]} />
        <meshToonMaterial color={color} />
      </mesh>
    )
  }
  const SpotLightHelperS = () => {
    const lightRef = useRef()
    const { angle, penumbra } = useControls({
      angle: Math.PI / 8,
      penumbra: {
        value: 0,
        min: 0,
        max: 1,
        step: 0.1,
      },
    })

    useHelper(lightRef, SpotLightHelper, "orange")

    return (
      <spotLight
        ref={lightRef}
        angle={angle}
        penumbra={penumbra}
        position={[2, 5, 1]}
        intensity={80}
      />
    )
  }
  return (
    <div id='canvas-container' style={{ width: "100vw", height: "100vh" }}>
      <Canvas
        style={{ backgroundColor: "lightBlue" }}
        camera={{ position: [2, 2, 2] }}
      >
        <GizmoHelper>
          <GizmoViewport />
        </GizmoHelper>
        {/* <FirstPersonControls
          movementSpeed={3}
          mouseDragOn={false}
          // autoForward
        /> */}
        <gridHelper args={[25, 25]} />
        <OrbitControls />
        <BoxAnimation />

        {/* <ambientLight color={"red"} intensity={33} />    */}
        {/* <directionalLight position={[2, 5, 1]} /> */}
        <SpotLightHelperS />
      </Canvas>
    </div>
  )
}

export default App
