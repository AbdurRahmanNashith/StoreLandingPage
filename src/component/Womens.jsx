import React from 'react'
import { OrbitControls, Stage } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import Scanned from './Scanned'

const Womens = () => {
  return (
    <Canvas>
        <Stage environment="city" intensity={0.6}>
        <Scanned/>
        </Stage>

      <OrbitControls enableZoom={false} autoRotate/>
    </Canvas>
  )
}

export default Womens
