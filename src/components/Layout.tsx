import styled from 'styled-components'
import Navigation from './Navigation'
import Social from './Social'
import {
  BODY_DARK,
  BODY_LIGHT,
  SVG_DARK_1,
  SVG_DARK_2,
  SVG_DARK_3,
  SVG_LIGHT_1,
  SVG_LIGHT_2,
  SVG_LIGHT_3,
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
  min-height: 100vh;
  width: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: row;
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
  overflow: hidden;
`
const WrapBgBot = styled.div`
  position: absolute;
  bottom: -2rem;
  left: -4rem;
  z-index: 0;
  width: 60%;
  max-width: 30rem;
  transition: all 0.3s ease-in;
`
const BackgroundBot = () => {
  const toggle = useToggleStore((state) => state.toggle)
  return (
    <WrapBgBot>
      <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128.47 205.88'>
        <defs></defs>
        <g id='Layer_2' data-name='Layer 2'>
          <g id='Layer_1-2' data-name='Layer 1'>
            <path
              fill={toggle ? SVG_DARK_3 : SVG_LIGHT_3}
              d='M60.44,87c4.31,16.16-5.59,35.05,3.12,49.33C72.5,151,94.29,150.13,108.2,160.21c12.68,9.18,16.91,25.85,20.27,41.14l-85.09,1.8c-8.58.19-17.8.19-24.87-4.66-7.83-5.37-11-15.27-13-24.55C-.5,146-4,107.69,8,80.63,18.37,57.15,54,63,60.44,87Z'
            />
            <path
              fill={toggle ? '#fff' : '#000'}
              d='M57.34,205.88c-6.93-7.68-5.42-19.29-2-26.9C58,173,62,167.77,65.85,162.67c1.76-2.32,3.58-4.71,5.25-7.14,6.65-9.66,9.28-18.47,7.81-26.19-1.63-8.58-8.09-15.2-14.33-21.6-6.44-6.59-13.09-13.4-14.5-22.38-1.3-8.23,2.16-16.1,5.5-23.7a85.25,85.25,0,0,0,4.93-13.15A39.39,39.39,0,0,0,50,11.43,39.4,39.4,0,0,0,12.61,1.84l-.13-.48A39.9,39.9,0,0,1,50.3,11.07,39.91,39.91,0,0,1,61,48.63a84.46,84.46,0,0,1-5,13.23c-3.47,7.89-6.74,15.33-5.47,23.42,1.39,8.82,8,15.58,14.36,22.12s12.81,13.12,14.47,21.85c1.49,7.85-1.16,16.79-7.89,26.57-1.67,2.43-3.5,4.83-5.26,7.15-3.85,5.08-7.84,10.33-10.47,16.21-3.34,7.47-4.84,18.86,1.93,26.37Z'
            />
          </g>
        </g>
      </svg>
    </WrapBgBot>
  )
}
const WrapBgTop = styled.div`
  position: absolute;
  top: -2rem;
  right: -4rem;
  z-index: 0;
  width: 60%;
  max-width: 30rem;
  transition: all 0.3s ease-in;
`
const BackgroundTop = () => {
  const toggle = useToggleStore((state) => state.toggle)
  return (
    <WrapBgTop>
      <svg viewBox='0 0 203.36 234.45' xmlns='http://www.w3.org/2000/svg'>
        <path
          d='m18.05 57.15c8.95 3.85 18.83 4.44 28.52 4.63s19.51 0 28.92 2.33c16.16 3.98 29.51 14.89 43.58 23.83 12 7.63 24.73 14 37.46 20.27 7.78 3.86 16.81 7.79 24.84 4.46 7.78-3.23 11.45-12 14.1-20 4.53-13.67 8.38-27.88 7.84-42.28s-6-29.2-17.36-38.12c-11.95-9.46-28.28-10.97-43.55-11.58-38.64-1.55-78.52-.79-116.78 5.31-27.8 4.49-36.81 38.66-7.57 51.15z'
          fill={toggle ? SVG_DARK_1 : SVG_LIGHT_1}
        />
        <path
          d='m115.29 22.3c-5.69 10-5.27 22.41-2 33.4s9.11 21 14 31.36 9 21.54 8.37 33c-.51 9-3.91 17.6-5.78 26.43s-2 18.79 3.33 26.08c5.77 7.91 17 11.37 20.64 20.44 4 9.86-3 21.68 1.12 31.5 3.48 8.37 14.46 11.88 23 8.9s14.63-11 17.56-19.55 3.21-17.8 3.46-26.87q1.32-48.78 2.66-97.58c.53-19.68.86-40.33-8.2-57.81-6.88-13.33-21.55-24.6-37.06-24.44-13.84.16-33.39 1.68-41.1 15.14z'
          fill={toggle ? SVG_DARK_2 : SVG_LIGHT_2}
          opacity='.8'
        />
        <path
          d='m180.47 122.7a72.59 72.59 0 0 1 -23.47-41.44c-.25-1.36-.46-2.76-.67-4.11-.74-4.87-1.51-9.91-4-14.19-4.15-7.28-12.68-11.94-26.06-14.27-1.71-.29-3.47-.56-5.17-.83-8.51-1.32-17.31-2.69-24.45-7.55a22.74 22.74 0 0 1 -9.5-15.66 13.69 13.69 0 0 1 3.46-11.24l.37.34a13.17 13.17 0 0 0 -3.33 10.84 22.23 22.23 0 0 0 9.35 15.31c7 4.79 15.79 6.15 24.25 7.47 1.7.26 3.46.53 5.17.83 13.54 2.35 22.18 7.1 26.42 14.51 2.49 4.36 3.27 9.45 4 14.36.2 1.35.42 2.75.66 4.1a72.08 72.08 0 0 0 23.28 41.16z'
          fill={toggle ? '#fff' : '#000'}
        />
      </svg>
    </WrapBgTop>
  )
}

const Layout = ({ children }: Props) => {
  const toggle = useToggleStore((state: any) => state.toggle)

  return (
    <WrapLayout toggle={toggle}>
      <SidePanel />
      <ToggleDarkMode />
      <Social />
      <WrapChild>
        <Navigation />
        {/* <BackgroundBot />
        <BackgroundTop /> */}
        {children}
      </WrapChild>
    </WrapLayout>
  )
}
export default Layout
