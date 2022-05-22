import { motion } from 'framer-motion'
import styled from 'styled-components'
const Wrapper = styled.div`
  margin-left: auto;
  margin-right: auto;
  position: relative;
  text-align: center;
  max-width: 48rem;
`
const Title = styled.h1`
  font-size: 2rem;
`
const Text = styled.p`
  font-size: 1rem;
  line-height: 1.5rem;
  margin: 0.75rem 0;
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
        <Text>I am a Frontend Developer from Helsinki, Finland</Text>
        <Text>
          I enjoy taking complex problems and turning them into simple and
          beautiful interface designs. I also love the logic and structure of
          coding and always strive into write elegant and efficient code whether
          it be HTML, CSS or Javascript.
        </Text>
        <Text>
          When I'm not coding, you'll find me in the gym or on the court
          shooting some hoops.
        </Text>
      </Wrapper>
    </motion.div>
  )
}

export default About
