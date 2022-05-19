import React, { Suspense, useRef, useState } from 'react'
import { OrbitControls, MapControls, useGLTF } from '@react-three/drei'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import * as THREE from 'three'
import useToggleStore from '~/store/themeStore'
import styled from 'styled-components'

type MaskModel = {
  rotation: {
    x?: number
    y?: number
    z?: number
  }
}

function Model() {
  const { scene, animations } = useGLTF('/models/background/scene.gltf')
  const ship = useRef<MaskModel>()
  let mixer = new THREE.AnimationMixer(scene)

  useFrame(({ mouse }) => {
    ship.current!.rotation.z = mouse.x * 0.5
    ship.current!.rotation.y = mouse.x * 0.5
    ship.current!.rotation.x = -mouse.y * 0.5
  })

  // animations.forEach((clip) => {
  //   const action = mixer.clipAction(clip)
  //   action.play()
  // })
  // useFrame((state, delta) => {
  //   mixer.update(delta)
  // })

  return (
    <primitive ref={ship} scale={0.3} object={scene} position={[0, 0, 0]} />
  )
}
const Background = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 0;
  background: #fff;
`

function AnimationBackground() {
  return (
    <Background>
      <Canvas>
        <ambientLight intensity={1} />
        <Suspense fallback={null}>
          <Model />
        </Suspense>
      </Canvas>
    </Background>
  )
}

export default AnimationBackground

useGLTF.preload('/models/background/scene.gltf')
