import { motion } from 'framer-motion'
import styled from 'styled-components'
import useToggleStore from '~/store/themeStore'
import {
  BACKGROUND_DARK,
  BACKGROUND_LIGHT,
  SVG_DARK_1,
  SVG_DARK_2,
  SVG_DARK_3,
  SVG_LIGHT_1,
  SVG_LIGHT_2,
  SVG_LIGHT_3,
} from '~/styled/Themes'

const Wrapper = styled.div`
  margin-left: auto;
  margin-right: auto;
  position: relative;
  text-align: center;
  max-width: 64rem;
`

const Title = styled.p`
  font-size: 2.5rem;
  line-height: 3rem;
  font-weight: bold;
  margin-bottom: 0;
`

const Line = styled.p`
  font-size: 1.2rem
  line-height: 1.5rem;
`
const WrapBgMain = styled.div`
  width: 90%;
  margin: auto;
  max-width: 32rem;

  img {
    width: 100%;
  }
`
const TextWrapper = styled.div`
  position: absolute;
  top: 50%;
  width: calc(50% - 4rem);
  @media screen and (max-width: 1023px) {
    width: calc(70% - 4rem);
  }
  left: 50%;
  margin-top: -1rem;
  transform: translate(-50%, -50%);
  z-index: 10;
`
const SvgBg = () => {
  const toggle = useToggleStore((state) => state.toggle)
  return (
    <svg
      viewBox='0 0 169.66 134.08'
      xmlns='http://www.w3.org/2000/svg'
      xmlnsXlink='http://www.w3.org/1999/xlink'>
      <linearGradient id='a' x1='236.48' x2='246.8' y1='-145.38' y2='-145.38'>
        <stop offset='0' stopColor={toggle ? SVG_DARK_3 : SVG_LIGHT_3} />
      </linearGradient>
      <path
        d='m34.29 21.82c3.75 1.76 8.22.15 11.54-1.35 7.24-4 12.87-19.16 6-20.32-7.33-1.64-14.74 10.26-18.59 18.7a2.24 2.24 0 0 0 1 3z'
        fill={toggle ? BACKGROUND_DARK : BACKGROUND_LIGHT}
      />
      <g fill={toggle ? SVG_DARK_3 : SVG_LIGHT_3}>
        <path d='m160.11 67.22a1 1 0 1 1 1-1 1 1 0 0 1 -1 1z' />
        <path d='m160.1 73.17a1 1 0 1 1 1-1 1 1 0 0 1 -1 1z' />
        <path d='m160.09 79.12a1 1 0 1 1 1-1 1 1 0 0 1 -1 1z' />
        <path d='m160.08 85.07a1 1 0 1 1 1-1 1 1 0 0 1 -1 1z' />
        <path d='m160.07 91a1 1 0 1 1 1-1 1 1 0 0 1 -1 1z' />
        <path d='m155.49 67.21a1 1 0 1 1 1-1 1 1 0 0 1 -1 1z' />
        <path d='m155.48 73.16a1 1 0 0 1 0-2 1 1 0 0 1 0 2z' />
        <path d='m155.46 79.11a1 1 0 1 1 1-1 1 1 0 0 1 -1 1z' />
        <path d='m155.45 85.06a1 1 0 1 1 1-1 1 1 0 0 1 -1 1z' />
        <path d='m155.44 91a1 1 0 0 1 -1-1 1 1 0 1 1 1 1z' />
        <path d='m150.86 67.21a1 1 0 1 1 1-1 1 1 0 0 1 -1 1z' />
        <path d='m150.85 73.15a1 1 0 1 1 1-1 1 1 0 0 1 -1 1z' />
        <path d='m150.84 79.1a1 1 0 1 1 1-1 1 1 0 0 1 -1 1z' />
        <path d='m150.83 85.05a1 1 0 1 1 1-1 1 1 0 0 1 -1 1z' />
        <path d='m150.81 91a1 1 0 1 1 0-2 1 1 0 1 1 0 2z' />
        <path d='m146.23 67.2a1 1 0 1 1 1-1 1 1 0 0 1 -1 1z' />
        <path d='m146.22 73.14a1 1 0 1 1 0-2 1 1 0 1 1 0 2z' />
        <path d='m146.21 79.09a1 1 0 1 1 1-1 1 1 0 0 1 -1 1z' />
        <path d='m146.2 85a1 1 0 1 1 1-1 1 1 0 0 1 -1 1z' />
        <path d='m146.19 91a1 1 0 1 1 1-1 1 1 0 0 1 -1 1z' />
        <path d='m141.61 67.19a1 1 0 1 1 1-1 1 1 0 0 1 -1 1z' />
        <path d='m141.6 73.14a1 1 0 0 1 -1-1 1 1 0 1 1 2 0 1 1 0 0 1 -1 1z' />
        <path d='m141.58 79.08a1 1 0 1 1 1-1 1 1 0 0 1 -1 1z' />
        <path d='m141.57 85a1 1 0 1 1 1-1 1 1 0 0 1 -1 1z' />
        <path d='m141.56 91a1 1 0 1 1 1-1 1 1 0 0 1 -1 1z' />
        <path d='m137 67.18a1 1 0 0 1 -1-1 1 1 0 1 1 1 1z' />
        <path d='m137 73.13a1 1 0 1 1 1-1 1 1 0 0 1 -1 1z' />
        <path d='m137 79.08a1 1 0 0 1 -1-1 1 1 0 1 1 1 1z' />
        <path d='m137 85a1 1 0 1 1 1-1 1 1 0 0 1 -1 1z' />
        <path d='m136.93 91a1 1 0 1 1 1-1 1 1 0 0 1 -1 1z' />
        <path d='m70.31 11.86a1 1 0 1 1 1-1 1 1 0 0 1 -1 1z' />
        <path d='m70.3 17.81a1 1 0 0 1 0-2 1 1 0 0 1 0 2z' />
        <path d='m70.29 23.75a1 1 0 1 1 1-1 1 1 0 0 1 -1 1z' />
        <path d='m70.28 29.7a1 1 0 1 1 1-1 1 1 0 0 1 -1 1z' />
        <path d='m70.27 35.65a1 1 0 1 1 1-1 1 1 0 0 1 -1 1z' />
        <path d='m65.69 11.85a1 1 0 1 1 1-1 1 1 0 0 1 -1 1z' />
        <path d='m65.67 17.8a1 1 0 1 1 1-1 1 1 0 0 1 -1 1z' />
        <path d='m65.66 23.74a1 1 0 1 1 1-1 1 1 0 0 1 -1 1z' />
        <path d='m65.65 29.69a1 1 0 1 1 1-1 1 1 0 0 1 -1 1z' />
        <path d='m65.64 35.64a1 1 0 1 1 1-1 1 1 0 0 1 -1 1z' />
        <path d='m61.06 11.84a1 1 0 1 1 1-1 1 1 0 0 1 -1 1z' />
        <path d='m61.05 17.79a1 1 0 1 1 1-1 1 1 0 0 1 -1 1z' />
        <path d='m61 23.74a1 1 0 0 1 -1-1 1 1 0 1 1 2 0 1 1 0 0 1 -1 1z' />
        <path d='m61 29.68a1 1 0 0 1 0-2 1 1 0 1 1 0 2z' />
        <path d='m61 35.63a1 1 0 1 1 1-1 1 1 0 0 1 -1 1z' />
        <path d='m56.43 11.83a1 1 0 1 1 1-1 1 1 0 0 1 -1 1z' />
        <path d='m56.42 17.78a1 1 0 1 1 1-1 1 1 0 0 1 -1 1z' />
        <path d='m56.41 23.73a1 1 0 1 1 1-1 1 1 0 0 1 -1 1z' />
        <path d='m56.4 29.67a1 1 0 1 1 1-1 1 1 0 0 1 -1 1z' />
        <path d='m56.39 35.62a1 1 0 1 1 1-1 1 1 0 0 1 -1 1z' />
        <path d='m51.81 11.82a1 1 0 1 1 1-1 1 1 0 0 1 -1 1z' />
        <path d='m51.8 17.77a1 1 0 1 1 1-1 1 1 0 0 1 -1 1z' />
        <path d='m51.78 23.72a1 1 0 1 1 1-1 1 1 0 0 1 -1 1z' />
        <path d='m51.77 29.67a1 1 0 1 1 1-1 1 1 0 0 1 -1 1z' />
        <path d='m51.76 35.61a1 1 0 1 1 1-1 1 1 0 0 1 -1 1z' />
        <path d='m47.18 11.81a1 1 0 1 1 1-1 1 1 0 0 1 -1 1z' />
        <path d='m47.17 17.76a1 1 0 1 1 1-1 1 1 0 0 1 -1 1z' />
        <path d='m47.16 23.71a1 1 0 0 1 -1-1 1 1 0 0 1 2 0 1 1 0 0 1 -1 1z' />
        <path d='m47.15 29.66a1 1 0 1 1 1-1 1 1 0 0 1 -1 1z' />
        <path d='m47.13 35.61a1 1 0 0 1 0-2 1 1 0 1 1 0 2z' />
      </g>
      <path
        d='m111.28 115.33a19.83 19.83 0 0 1 -28.59 15.86l.29-.59a19.15 19.15 0 1 0 17.15-34.24l.3-.59a19.85 19.85 0 0 1 10.85 19.56z'
        fill={toggle ? SVG_DARK_3 : SVG_LIGHT_3}
      />
      <path
        d='m78.12 126.56a2.5 2.5 0 1 1 -1.25 3.31 2.51 2.51 0 0 1 1.25-3.31z'
        fill={toggle ? SVG_DARK_3 : SVG_LIGHT_3}
      />
      <path
        d='m106.07 18.94c16.54-8.43 47.2-8.84 55.48 7.41s-9 43-25.5 51.42-36.66 2.1-44.94-14.15-1.58-36.25 14.96-44.68z'
        fill={toggle ? SVG_DARK_2 : SVG_LIGHT_2}
        opacity='.5'
      />
      <path
        d='m20.46 70.6c16.54-8.43 47.21-8.84 55.54 7.4s-9 43-25.5 51.43-36.72 2.09-45-14.15-1.58-36.28 14.96-44.68z'
        fill={toggle ? SVG_DARK_2 : SVG_LIGHT_2}
        opacity='.5'
      />
      <path
        d='m34.92 93.38a6.63 6.63 0 0 1 7.13 2.9 56.48 56.48 0 0 0 67.14 22.34 3.41 3.41 0 0 1 4.05 1.35 30.67 30.67 0 1 0 43.42-41.7 27.38 27.38 0 0 1 -11.06-19.27 56.47 56.47 0 0 0 -100.37-28.25 18.9 18.9 0 0 1 -15.71 7.33 28.09 28.09 0 1 0 5.4 55.3z'
        fill={toggle ? SVG_DARK_1 : SVG_LIGHT_1}
      />
      <path
        d='m60.4 114.18h87v-85h-15l.92 1.11h12.92v82.76h-124.24v-82.74h23.41c.3-.37.6-.74.92-1.11h-25.49v85z'
        fill='#fff'
      />
      <path
        d='m40.09 116.45c2.49-2.29-2.09-7.26-5.38-8.51a2.77 2.77 0 0 0 -2.06 0 1.46 1.46 0 0 0 -1 1.52c2.6 10.7 4.66 9.86 8.44 6.99z'
        fill='url(#a)'
      />
      <path
        d='m150.7 37.82a19.79 19.79 0 0 1 16.12 28.44l-.59-.29a19.15 19.15 0 1 0 -34.4-16.84l-.59-.29a19.85 19.85 0 0 1 19.46-11.02z'
        fill={toggle ? SVG_DARK_2 : SVG_LIGHT_2}
      />
      <path
        d='m166.77 68.63a1.67 1.67 0 1 1 -1.67-1.63 1.67 1.67 0 0 1 1.67 1.63z'
        fill={toggle ? SVG_DARK_2 : SVG_LIGHT_2}
      />
    </svg>
  )
}
const Home = () => {
  const variants = {
    initial: { opacity: 0, y: '100px', scale: 0.5 },
    animate: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.3 },
    },
  }
  return (
    <motion.div variants={variants} initial='initial' animate='animate'>
      <Wrapper>
        <WrapBgMain>
          <SvgBg />
        </WrapBgMain>
        <TextWrapper>
          <Title>Hello</Title>
          <Line>My name is Thang Nguyen</Line>
          <Line>Frontend Developer based in Finland</Line>
        </TextWrapper>
      </Wrapper>
    </motion.div>
  )
}

export default Home
