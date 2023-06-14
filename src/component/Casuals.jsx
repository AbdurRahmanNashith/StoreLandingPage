import React from 'react'
import { OrbitControls, Stage } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import Casual from './Casual'

const Casuals = () => {
  return (
    <Canvas>
        <Stage environment="city" intensity={0.6}>
        <Casual/>
        </Stage>

      <OrbitControls enableZoom={false} autoRotate/>
    </Canvas>
  )
}

export default Casuals
