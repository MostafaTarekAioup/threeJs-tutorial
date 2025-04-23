import { Canvas, useFrame } from "@react-three/fiber"
import {
  FirstPersonControls,
  OrbitControls,
  GizmoHelper,
  GizmoViewcube,
  GizmoViewport,
} from "@react-three/drei"
import { useRef } from "react"
import "./App.css"

function App() {
  const BoxAnimation = () => {
    const boxRef = useRef(null)
    // useFrame(() => {
    //   // @ts-expect-error - current.rotation is not recognized on MeshRef type
    //   boxRef.current.rotation.x += 0.005
    //   // @ts-expect-error - current.rotation is not recognized on MeshRef type
    //   boxRef.current.rotation.y += 0.005
    //   // @ts-expect-error - current.rotation is not recognized on MeshRef type
    //   boxRef.current.rotation.z += 0.005
    // })
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
        <meshToonMaterial color='red' />
      </mesh>
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
        <directionalLight position={[2, 5, 1]} />
      </Canvas>
    </div>
  )
}

export default App
