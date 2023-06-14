import React from 'react'
import { OrbitControls, Stage } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import Bags from './Bags';

const Slings = () => {
  return (
    <Canvas>
    <Stage environment="city" intensity={0.5}>
    <Bags/>
    </Stage> 
  <OrbitControls enableZoom={false} autoRotate/>
</Canvas>
  )
}

export default Slings
