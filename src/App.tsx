import { Canvas } from "@react-three/fiber"
import "./App.css"

function App() {
  return (
    <div id='canvas-container' style={{ width: "100vw", height: "100vh" }}>
      <Canvas
        style={{ backgroundColor: "lightBlue" }}
        camera={{ position: [2, 2, 2] }}
      >
        <mesh
        // position={[-2, 2, 1]}
        // rotation={[0, 0, 5]}
        // scale={[2, 2, 2]}
        >
          {/* <sphereGeometry args={[2, 80, 80]} /> */}
          <boxGeometry args={[2, 3, 2]} />
          {/* <torusKnotGeometry args={[1.3, 0.3, 256, 256]} /> */}
          <meshToonMaterial color='red' />
          <directionalLight position={[2, 5, 1]} />
        </mesh>
      </Canvas>
    </div>
  )
}

export default App
