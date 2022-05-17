import React, { Suspense, useRef } from 'react'
import { OrbitControls, MapControls, useGLTF } from '@react-three/drei'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import * as THREE from 'three'
import useToggleStore from '~/store/themeStore'
import styled from 'styled-components'

function Model() {
  const { scene, animations } = useGLTF('/models/background/scene.gltf')
  let mixer = new THREE.AnimationMixer(scene)
  animations.forEach((clip) => {
    const action = mixer.clipAction(clip)
    action.play()
  })
  useFrame((state, delta) => {
    mixer.update(delta)
  })

  return <primitive object={scene} />
}

const Background = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 0;
`

function SkyBox() {
  const { scene } = useThree()
  const loader = new THREE.CubeTextureLoader()
  const texture = loader.load([
    '/skybox/posx.jpg',
    '/skybox/negx.jpg',
    '/skybox/posy.jpg',
    '/skybox/negy.jpg',
    '/skybox/posz.jpg',
    '/skybox/negz.jpg',
  ])

  scene.background = texture
  return null
}

function AnimationBackground() {
  const toggle = useToggleStore((state) => state.toggle)

  return (
    <Background>
      <Canvas camera={{ position: [10, 10, 10], fov: 50 }}>
        <ambientLight intensity={1} />
        <directionalLight
        // castShadow
        // position={[10, 10, 10]}
        // shadow-mapSize={[1024, 1024]}
        >
          {/* <orthographicCamera
            attach='shadow-camera'
            args={[-10, 10, 10, -10]}
          /> */}
        </directionalLight>
        <Suspense fallback={null}>
          <Model />
        </Suspense>
        <OrbitControls
        // maxAzimuthAngle={Math.PI / 4}
        // maxPolarAngle={Math.PI / 2.3}
        // minAzimuthAngle={-Math.PI / 4}
        // minPolarAngle={0}
        // enablePan={false}
        // enableZoom={false}
        // autoRotate={true}
        />
        <SkyBox />
      </Canvas>
    </Background>
  )
}

export default AnimationBackground

useGLTF.preload('/models/background/scene.gltf')
