/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.3 scanned.gltf --transform
Author: ShekhirevaVictoria (https://sketchfab.com/ShekhirevaVictoria)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/scanned-biege-shoe-8c14930fb3b74282ae80c236404307bb
Title: Scanned Biege Shoe
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const { nodes, materials } = useGLTF('/scanned-transformed.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Object_2.geometry} material={materials.defaultMat} position={[0, -7.664, 5.392]} rotation={[-Math.PI, 0, 0]} />
    </group>
  )
}

useGLTF.preload('/scanned-transformed.glb')
