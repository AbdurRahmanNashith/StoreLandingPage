import React from 'react'
import Belt from './Belt';
import { OrbitControls, Stage } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'

const Belts = () => {
    return (
        <Canvas>
            <Stage environment="city" intensity={0.5   }>
            <Belt/>
            </Stage> 
          <OrbitControls enableZoom={false} autoRotate/>
        </Canvas>
      )
    }

export default Belts
