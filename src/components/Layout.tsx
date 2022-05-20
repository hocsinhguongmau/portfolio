import styled from 'styled-components'
import AnimationBackground from './AnimationBackground'
import Navigation from './Navigation'
import Social from './Social'
import { useEffect, useState } from 'react'
import useMouseStore from '~/store/mouseStore'

type Props = {
  children: JSX.Element
}
const WrapLayout = styled.div`
  position: relative;
  height: 100vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const WrapChild = styled.div`
  position: relative;
  z-index: 10;
`

const Layout = ({ children }: Props) => {
  const { mouse, setMouse } = useMouseStore()
  useEffect(() => {
    const update = (e: MouseEvent) => {
      setMouse({ x: e.x, y: e.y })
    }
    window.addEventListener('mousemove', update)
    return () => {
      window.removeEventListener('mousemove', update)
    }
  }, [mouse.x, mouse.y])
  return (
    <WrapLayout>
      <AnimationBackground />
      {/* <Navigation /> */}
      {/* <ToggleDarkMode />
      <Social />
      <WrapChild>{children}</WrapChild> */}
    </WrapLayout>
  )
}
export default Layout
