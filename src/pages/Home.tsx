import { motion } from 'framer-motion'
import Lottie from 'lottie-react'
import styled from 'styled-components'
import frontend from '~/lotties/frontend.json'

const WrapAnimation = styled.div`
  width: 66.66%;
  margin-left: auto;
  margin-right: auto;
`

const Animation = () => {
  return (
    <WrapAnimation>
      <Lottie animationData={frontend} autoplay={true} loop={true} />
    </WrapAnimation>
  )
}

const Wrapper = styled.div`
  margin-left: auto;
  margin-right: auto;
  position: relative;
  background: #000;
  border-radius: 9999px;
  text-align: center;
  max-width: 64rem;
`

const Title = styled.p`
  font-size: 1.875rem;
  line-height: 2.25rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
`

const Line = styled.p`
  font-size: 1.5rem /* 24px */;
  line-height: 2rem /* 32px */;
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
  return (
    <motion.div variants={variants} initial='initial' animate='animate'>
      <Wrapper>
        <Title>Hello</Title>
        <Line>My name is Thang Nguyen</Line>
        <Line>Frontend developer based in Helsinki</Line>
      </Wrapper>
    </motion.div>
  )
}

export default Home
