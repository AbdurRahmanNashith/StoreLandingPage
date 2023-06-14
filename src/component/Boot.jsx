import React from 'react'
import { OrbitControls, Stage } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import Boots from './Boots'

const Boot = () => {
  return (
    <Canvas>
        <Stage environment="city" intensity={0.6}>
        <Boots/>
        </Stage>

      <OrbitControls enableZoom={false} autoRotate/>
    </Canvas>
  )
}

export default Boot
