import React, { useState } from 'react'
import { isDesktop } from 'react-device-detect'
import { AiOutlineClose } from 'react-icons/ai'
import { BiMenuAltLeft } from 'react-icons/bi'
import { useSwipeable } from 'react-swipeable'
import styled from 'styled-components'
import useToggleStore from '~/store/themeStore'
import { BACKGROUND_DARK, BACKGROUND_LIGHT } from '~/styled/Themes'
import AnimationBackground from './AnimationBackground'
import Copyright from './Copyright'
import Info from './Info'

type PanelProps = ThemePropsType & {
  active: boolean
}

const WrapSidePanel = styled.div`
  width: 300px;
  height: 100vh;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: ${(props: PanelProps) =>
    props.toggle ? BACKGROUND_DARK : BACKGROUND_LIGHT};
  @media screen and (max-width: 767px) {
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1000;
    transform: ${(props: PanelProps) =>
      props.active ? 'translateX(0)' : 'translateX(-100%)'};

    transition: all 0.3s ease-out;
  }
`
const WrapImg = styled.div`
  padding: 2rem;
  text-align: center;
  @media screen and (max-width: 767px) {
    padding: 1rem;
    img {
      width: 100px;
    }
  }
`
const CatImg = () => {
  return (
    <WrapImg>
      <img src='/images/cat.webp' />
    </WrapImg>
  )
}

const ActiveButton = styled.button`
  position: absolute;
  top: 1.5rem;
  left: 100%;
  background: none;
  border: none;
  font-size: 2rem;
  padding: 0;
  color: inherit;
  @media screen and (min-width: 768px) {
    display: none;
  }
`
const CloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  padding: 0;
  color: inherit;
  font-size: 2rem;
  background: none;
  border: none;
  @media screen and (min-width: 768px) {
    display: none;
  }
`

function SidePanel() {
  const swipePanel = useSwipeable({
    onSwipedLeft: () => setPanelActive(!panelActive),
  })

  const toggle = useToggleStore((state) => state.toggle)
  const [panelActive, setPanelActive] = useState(false)
  return (
    <WrapSidePanel toggle={toggle} active={panelActive} {...swipePanel}>
      <ActiveButton onClick={() => setPanelActive(!panelActive)}>
        <BiMenuAltLeft />
      </ActiveButton>
      <CloseButton onClick={() => setPanelActive(!panelActive)}>
        <AiOutlineClose />
      </CloseButton>
      <div>
        {isDesktop ? <AnimationBackground /> : <CatImg />}
        <Info />
      </div>
      <Copyright />
    </WrapSidePanel>
  )
}

export default SidePanel
