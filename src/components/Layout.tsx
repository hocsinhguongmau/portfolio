import AnimationBackground from './AnimationBackground'
import Navigation from './Navigation'
import Social from './Social'
import ToggleDarkMode from './ToggleDarkMode'
type Props = {
  children: JSX.Element
}
const Layout = ({ children }: Props) => {
  return (
    <div className='relative h-screen overflow-hidden flex flex-col justify-center'>
      <AnimationBackground />
      <Navigation />
      <ToggleDarkMode />
      <Social />
      <div className='relative z-10'>{children}</div>
    </div>
  )
}
export default Layout
