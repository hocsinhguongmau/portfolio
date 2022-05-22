import React from 'react'
import styled from 'styled-components'
import useToggleStore from '~/store/themeStore'
import { BACKGROUND_DARK, BACKGROUND_LIGHT } from '~/styled/Themes'
import AnimationBackground from './AnimationBackground'
import Copyright from './Copyright'
import Info from './Info'
import SideNav from './SideNav'

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

function SidePanel() {
  const toggle = useToggleStore((state) => state.toggle)

  return (
    <WrapSidePanel toggle={toggle}>
      <div>
        <AnimationBackground />
        <Info />
      </div>
      <Copyright />
    </WrapSidePanel>
  )
}

export default SidePanel
