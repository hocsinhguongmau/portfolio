import { motion } from 'framer-motion'

function About() {
  const variants = {
    initial: { opacity: 0, x: '-50%', scale: 0.5 },
    animate: {
      opacity: 1,
      scale: 1,
      x: 0,
      transition: { duration: 0.3 },
    },
  }
  return (
    <motion.div variants={variants} initial='initial' animate='animate'>
      About
    </motion.div>
  )
}

export default About
