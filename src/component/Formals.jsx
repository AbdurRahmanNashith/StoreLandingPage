import { OrbitControls, Stage } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React from 'react'
import Unknown from './Unknown';


const Formals = () => {
  return (
    <Canvas>
        <Stage environment="city" intensity={0.6}>
        <Unknown/>
        </Stage>
      <OrbitControls enableZoom={false} autoRotate/>
    </Canvas>
  )
}

export default Formals
