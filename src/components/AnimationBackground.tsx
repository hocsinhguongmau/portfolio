import React, { Suspense } from 'react'
import { Canvas, useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { useGLTF } from '@react-three/drei'
import useToggleStore from '~/store/themeStore'

const Model = () => {
  const { scene } = useGLTF('/models/background/scene.gltf')
  return <primitive object={scene} />
}

function AnimationBackground() {
  const toggle = useToggleStore((state) => state.toggle)

  return (
    <div
      className={`absolute z-0 top-0 left-0 w-full h-screen ${
        toggle ? 'bg-black' : ''
      }`}>
      {/* <Canvas>
        <Model />
      </Canvas> */}
    </div>
  )
}

export default AnimationBackground
