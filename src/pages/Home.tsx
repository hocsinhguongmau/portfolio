import { motion } from 'framer-motion'
import styled from 'styled-components'
import useToggleStore from '~/store/themeStore'

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
  font-size: 1.2rem /* 24px */;
  line-height: 1rem /* 32px */;
`
const WrapBgMain = styled.div`
  width: 50%;
  margin: auto;
  img {
    width: 100%;
  }
`
const TextWrapper = styled.div`
  position: absolute;
  top: 50%;
  width: calc(50% - 4rem);
  left: 50%;
  margin-top: -1rem;
  transform: translate(-50%, -50%);
  z-index: 10;
`
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
  const toggle = useToggleStore((state) => state.toggle)
  return (
    <motion.div variants={variants} initial='initial' animate='animate'>
      <Wrapper>
        <WrapBgMain>
          {toggle ? (
            <img src='/images/home-bg-dark.svg' />
          ) : (
            <img src='/images/home-bg-light.svg' />
          )}
        </WrapBgMain>
        <TextWrapper>
          <Title>Hello</Title>
          <Line>My name is Thang Nguyen</Line>
          <Line>Frontend developer based in Helsinki</Line>
        </TextWrapper>
      </Wrapper>
    </motion.div>
  )
}

export default Home
