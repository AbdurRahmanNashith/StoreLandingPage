import React from 'react'
import Handbags from './Handbags';
import { OrbitControls, Stage } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'

const Lbags = () => {
    return (
        <Canvas>
            <Stage environment="city" intensity={0.5   }>
            <Handbags/>
            </Stage> 
          <OrbitControls enableZoom={false} autoRotate/>
        </Canvas>
      )
    }

export default Lbags
