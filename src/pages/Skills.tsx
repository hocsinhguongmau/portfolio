import React from 'react'
import { motion } from 'framer-motion'

function Skills() {
  const variants = {
    initial: { opacity: 0, y: '100%', scale: 0.5 },
    animate: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.3 },
    },
  }
  return (
    <motion.div variants={variants} initial='initial' animate='animate'>
      Skills
    </motion.div>
  )
}

export default Skills
