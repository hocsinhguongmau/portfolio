import styled, { ThemeProvider } from 'styled-components'
import AnimationBackground from './AnimationBackground'
import Navigation from './Navigation'
import Social from './Social'
import { useEffect, useState } from 'react'
import useMouseStore from '~/store/mouseStore'
import {
  BODY_DARK,
  BODY_LIGHT,
  darkTheme,
  lightTheme,
  TEXT_DARK,
  TEXT_LIGHT,
} from '../styled/Themes'
import useToggleStore from '~/store/themeStore'
import ToggleDarkMode from './ToggleDarkMode'
import SidePanel from './SidePanel'

type Props = {
  children: JSX.Element
}
const WrapLayout = styled.div`
  position: relative;
  height: 100vh;
  width: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  transition: all 0.3s ease-in;
  background: ${(props: ThemePropsType) =>
    props.toggle ? BODY_DARK : BODY_LIGHT};
  color: ${(props: ThemePropsType) => (props.toggle ? TEXT_DARK : TEXT_LIGHT)};
`

const WrapChild = styled.div`
  position: relative;
  z-index: 10;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
`

const Layout = ({ children }: Props) => {
  const { mouse, setMouse } = useMouseStore()
  const toggle = useToggleStore((state: any) => state.toggle)
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
    <WrapLayout toggle={toggle}>
      <SidePanel />
      <ToggleDarkMode />
      <Social />
      <WrapChild>
        <Navigation />
        {children}
      </WrapChild>
    </WrapLayout>
  )
}
export default Layout
