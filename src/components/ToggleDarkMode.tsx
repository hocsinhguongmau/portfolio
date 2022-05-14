import Lottie from 'lottie-react'

import React, { useRef } from 'react'
import toggleIcon from '~/lotties/toggle.json'
import useToggleStore from '~/store/themeStore'
const ToggleButton = () => {
  const toggle = useToggleStore((state: any) => state.toggle)
  const setToggle = useToggleStore((state: any) => state.setToggle)
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
    <>
      {!toggle ? 'light' : 'dark'}
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
    </>
  )
}

function ToggleDarkMode() {
  return (
    <div className='w-24 absolute top-2 right-2 z-50 cursor-pointer'>
      <ToggleButton />
    </div>
  )
}

export default ToggleDarkMode
