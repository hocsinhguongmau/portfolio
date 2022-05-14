import { motion } from 'framer-motion'
import Lottie from 'lottie-react'
import frontend from '~/lotties/frontend.json'

const Animation = () => {
  return (
    <div className='w-2/3 mx-auto'>
      <Lottie animationData={frontend} autoplay={true} loop={true} />
    </div>
  )
}

const Home = () => {
  const variants = {
    initial: { opacity: 0, y: '30%', scale: 0.5 },
    animate: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.3 },
    },
  }
  return (
    <motion.div variants={variants} initial='initial' animate='animate'>
      <div>
        <title>Portfolio</title>
        <div className='mx-auto max-w-5xl w-full p-12 rounded-xl grid grid-cols-2 '>
          <div className='flex flex-col justify-center'>
            <p className='text-3xl font-bold mb-2'>Hello</p>
            <p className='text-2xl'>My name is Thang Nguyen</p>
            <p className='text-2xl'>Frontend developer based in Helsinki</p>
          </div>
          <Animation />
        </div>
      </div>
    </motion.div>
  )
}

export default Home
