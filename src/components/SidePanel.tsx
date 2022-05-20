import React from 'react'
import styled from 'styled-components'
import useToggleStore from '~/store/themeStore'
import { BACKGROUND_DARK, BACKGROUND_LIGHT } from '~/styled/Themes'
import AnimationBackground from './AnimationBackground'

const WrapSidePanel = styled.div`
  width: 300px;
  height: 100vh;
  position: relative;
`

const WrapPanelBackground = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;
  transition: all 0.3s ease-in;
  background: ${(props: ThemePropsType) =>
    props.toggle ? BACKGROUND_DARK : BACKGROUND_LIGHT};
`
const PanelBackground = () => {
  const toggle = useToggleStore((state) => state.toggle)

  return <WrapPanelBackground toggle={toggle} />
}

function SidePanel() {
  return (
    <WrapSidePanel>
      <PanelBackground />
      <AnimationBackground />
    </WrapSidePanel>
  )
}

export default SidePanel
