import styled from 'styled-components'
import AnimationBackground from './AnimationBackground'
import Navigation from './Navigation'
import Social from './Social'
import ToggleDarkMode from './ToggleDarkMode'
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
  return (
    <WrapLayout>
      <AnimationBackground />
      <Navigation />
      <ToggleDarkMode />
      <Social />
      <WrapChild>{children}</WrapChild>
    </WrapLayout>
  )
}
export default Layout
