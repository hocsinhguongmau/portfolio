import { motion } from 'framer-motion'
import styled from 'styled-components'
import useToggleStore from '~/store/themeStore'
import { SVG_DARK_3, SVG_LIGHT_3 } from '~/styled/Themes'
const Wrapper = styled.div`
  margin-left: auto;
  margin-right: auto;
  position: relative;
  text-align: center;
  max-width: 48rem;
  padding: 0 2rem;
`
const Title = styled.h1`
  font-size: 2rem;
  @media screen and (max-width: 767px) {
    font-size: 1.5rem;
  }
`
const Text = styled.p`
  font-size: 1rem;
  line-height: 1.5rem;
  margin: 0.75rem 0;
  @media screen and (max-width: 767px) {
    font-size: 0.75rem;
    line-height: 1rem;
  }
  span {
    font-weight: bold;
    color: ${(props: ThemePropsType) =>
      props.toggle ? SVG_DARK_3 : SVG_LIGHT_3};
  }
`
const Background = styled.div`
  background-color: #ffffff;
  background-image: url('/images/about-bg.svg');
  background-attachment: fixed;
  background-size: cover;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
`
function About() {
  const toggle = useToggleStore((state) => state.toggle)
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
        <Title>About me</Title>
        <Text toggle={toggle}>
          A <span>Front-End web developer</span> passionate about creating
          interactive applications with <span>React / NextJS</span>.
        </Text>
        <Text>
          I enjoy learning the latest web technologies to enhance my skills and
          experience in web development.
        </Text>
        <Text>When I'm not coding, you'll find me in the gym.</Text>
      </Wrapper>
    </motion.div>
  )
}

export default About
