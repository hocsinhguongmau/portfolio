import React from 'react'
import { motion } from 'framer-motion'
import styled from 'styled-components'
import { FaReact } from 'react-icons/fa'
import useToggleStore from '~/store/themeStore'
import {
  BACKGROUND_DARK,
  BACKGROUND_LIGHT,
  SVG_DARK_3,
  SVG_LIGHT_3,
  TEXT_DARK,
  TEXT_LIGHT,
} from '~/styled/Themes'
const Wrapper = styled(motion.div)`
  margin-left: auto;
  margin-right: auto;
  position: relative;
  text-align: center;
  max-width: 48rem;
`
const Title = styled(motion.h1)`
  font-size: 2rem;
  padding-bottom: 1rem;
`
const WrapSkills = styled.div`
  margin: 0;
 .row{
  display: flex;
  flex-direction: row;
  justify-content: center;
  .hexagon{
  width: 5rem;
  height: 5rem;
  background: ${(props: ThemePropsType) =>
    props.toggle ? BACKGROUND_DARK : BACKGROUND_LIGHT};
  color: ${(props: ThemePropsType) => (props.toggle ? TEXT_DARK : TEXT_LIGHT)};
  clip-path: polygon(50% 0, 100% 25%, 100% 75%, 50% 100%, 0 75%, 0 25%);
  margin-top: -1.2rem;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.25rem;
  font-size:0.75rem;
  &:hover {
    background: ${(props: ThemePropsType) =>
      props.toggle ? SVG_DARK_3 : SVG_LIGHT_3};
  }
  svg {
    display: block;
    font-size: 1.5rem;
    margin-left: auto;
    margin-right: auto;
  }
`
function Skills() {
  const toggle = useToggleStore((state) => state.toggle)
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 50 },
    show: {
      opacity: 1,
      y: 0,
      transition: { type: 'ease-in' },
    },
  }
  return (
    <Wrapper variants={container} initial='hidden' animate='show'>
      <Title variants={item}>Skills</Title>
      <WrapSkills toggle={toggle}>
        <div>
          <motion.div className='row'>
            <motion.div className='hexagon' variants={item}>
              <FaReact />
              React
            </motion.div>
          </motion.div>
          <div className='row'>
            <motion.div className='hexagon' variants={item}>
              <FaReact />
              React
            </motion.div>
            <motion.div className='hexagon' variants={item}>
              <FaReact />
              React
            </motion.div>
          </div>
          <div className='row'>
            <motion.div className='hexagon' variants={item}>
              <FaReact />
              React
            </motion.div>
            <motion.div className='hexagon' variants={item}>
              <FaReact />
              React
            </motion.div>
            <motion.div className='hexagon' variants={item}>
              <FaReact />
              React
            </motion.div>
          </div>
          <div className='row'>
            <motion.div className='hexagon' variants={item}>
              <FaReact />
              React
            </motion.div>
            <motion.div className='hexagon' variants={item}>
              <FaReact />
              React
            </motion.div>
          </div>
          <div className='row'>
            <motion.div className='hexagon' variants={item}>
              <FaReact />
              React
            </motion.div>
          </div>
        </div>
      </WrapSkills>
    </Wrapper>
  )
}

export default Skills
