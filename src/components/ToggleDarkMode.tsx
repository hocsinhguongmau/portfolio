import Lottie from 'lottie-react'

import React, { useRef } from 'react'
import styled from 'styled-components'
import toggleIcon from '~/lotties/toggle.json'
import useToggleStore from '~/store/themeStore'
const ToggleButton = () => {
  const toggle = useToggleStore((state) => state.toggle)
  const setToggle = useToggleStore((state) => state.setToggle)
  const ref = useRef<any>(null)
  const toggleButton = () => {
    if (!toggle) {
      ref.current.playSegments([45, 0], true)
      ref.current.setSpeed(3)
      setToggle(true)
    } else {
      ref.current.playSegments([0, 45], true)
      ref.current.setSpeed(3)
      setToggle(false)
    }
  }

  return (
    <Lottie
      lottieRef={ref}
      animationData={toggleIcon}
      onClick={toggleButton}
      autoplay={false}
      loop={false}
      onDOMLoaded={() => {
        if (!toggle) {
          ref.current.goToAndStop(45, true)
        } else {
          ref.current.goToAndStop(0, true)
        }
      }}
    />
  )
}

const WrapToggle = styled.div`
  width: 6rem;
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  z-index: 100;
  cursor: pointer;
`

function ToggleDarkMode() {
  return (
    <WrapToggle>
      <ToggleButton />
    </WrapToggle>
  )
}

export default ToggleDarkMode
