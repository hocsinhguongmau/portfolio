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
      <div className='mx-auto max-w-5xl bg-white w-full p-12 rounded-xl grid grid-cols-2'>
        <div className='flex flex-col justify-center'>
          <p className='text-3xl font-bold'>Hello</p>
          <p className='text-2xl'>Project</p>
          <p className='text-2xl'>Frontend developer based in Helsinki</p>
        </div>
      </div>
    </motion.div>
  )
}

export default Skills
