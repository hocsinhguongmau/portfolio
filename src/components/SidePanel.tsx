import React from 'react'
import { isDesktop } from 'react-device-detect'
import styled from 'styled-components'
import useToggleStore from '~/store/themeStore'
import { BACKGROUND_DARK, BACKGROUND_LIGHT } from '~/styled/Themes'
import AnimationBackground from './AnimationBackground'
import Copyright from './Copyright'
import Info from './Info'

const WrapSidePanel = styled.div`
  width: 300px;
  height: 100vh;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: ${(props: ThemePropsType) =>
    props.toggle ? BACKGROUND_DARK : BACKGROUND_LIGHT};
`
const WrapImg = styled.div`
  padding: 2rem;
  text-align: center;
`
const CatImg = () => {
  return (
    <WrapImg>
      <img src='/images/cat.webp' />
    </WrapImg>
  )
}
function SidePanel() {
  const toggle = useToggleStore((state) => state.toggle)

  return (
    <WrapSidePanel toggle={toggle}>
      <div>
        {isDesktop ? <AnimationBackground /> : <CatImg />}
        <Info />
      </div>
      <Copyright />
    </WrapSidePanel>
  )
}

export default SidePanel
