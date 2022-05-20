import React, { Suspense, useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import useToggleStore from '~/store/themeStore'
import styled from 'styled-components'
import useMouseStore from '~/store/mouseStore'

type ModelType = {
  rotation: {
    x?: number
    y?: number
    z?: number
  }
}

function Model() {
  const { scene } = useGLTF('/models/background/scene.gltf')
  const ship = useRef<ModelType>()
  const mouse = useMouseStore((state) => state.mouse)
  useFrame(() => {
    ship.current!.rotation.z = -mouse.x / 3000
    ship.current!.rotation.y = mouse.x / 5000
    ship.current!.rotation.x = mouse.y / 1000 - 50
  })

  return (
    <primitive ref={ship} scale={1.5} object={scene} position={[0, 0, 0]} />
  )
}
const Background = styled.div`
  height: 150px;
  z-index: 10;
  position: relative;
  padding-top: 20px;
`

function AnimationBackground() {
  return (
    <Background>
      <Canvas>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <Suspense fallback={null}>
          <Model />
        </Suspense>
      </Canvas>
    </Background>
  )
}

export default AnimationBackground

useGLTF.preload('/models/background/scene.gltf')
