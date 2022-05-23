import React from 'react'
import { motion } from 'framer-motion'
import styled from 'styled-components'
import { FaReact } from 'react-icons/fa'
import {
  SiCypress,
  SiD3Dotjs,
  SiGraphql,
  SiJest,
  SiNextdotjs,
  SiStorybook,
  SiStyledcomponents,
  SiTailwindcss,
  SiTestinglibrary,
  SiTypescript,
} from 'react-icons/si'
import { DiCss3, DiJavascript1, DiJqueryLogo } from 'react-icons/di'
import useToggleStore from '~/store/themeStore'
import {
  BACKGROUND_DARK,
  BACKGROUND_LIGHT,
  SVG_DARK_3,
  SVG_LIGHT_3,
  TEXT_DARK,
  TEXT_LIGHT,
} from '~/styled/Themes'
import { AiFillGithub, AiFillHtml5 } from 'react-icons/ai'
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
  &:nth-child(odd){
    flex-direction: row-reverse;
    d
  }
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
      transition: { type: 'ease-in', duration: 0.3 },
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
              <SiNextdotjs />
              Next
            </motion.div>
            <motion.div className='hexagon' variants={item}>
              <DiJavascript1 />
              Javascript
            </motion.div>
          </div>
          <div className='row'>
            <motion.div className='hexagon' variants={item}>
              <AiFillHtml5 />
              HTML5
            </motion.div>
            <motion.div className='hexagon' variants={item}>
              <DiCss3 />
              CSS3
            </motion.div>
            <motion.div className='hexagon' variants={item}>
              <SiTailwindcss />
              Tailwinds
            </motion.div>
          </div>
          <div className='row'>
            <motion.div className='hexagon' variants={item}>
              <SiTypescript />
              Typescript
            </motion.div>
            <motion.div className='hexagon' variants={item}>
              <SiJest />
              Jest
            </motion.div>
            <motion.div className='hexagon' variants={item}>
              <SiCypress />
              Cypress
            </motion.div>
            <motion.div className='hexagon' variants={item}>
              <SiTestinglibrary />
              RTL
            </motion.div>
          </div>
          <div className='row'>
            <motion.div className='hexagon' variants={item}>
              <SiGraphql />
              GraphQL
            </motion.div>
            <motion.div className='hexagon' variants={item}>
              <SiStorybook />
              Storybook
            </motion.div>
            <motion.div className='hexagon' variants={item}>
              <SiD3Dotjs />
              D3.js
            </motion.div>
          </div>
          <div className='row'>
            <motion.div className='hexagon' variants={item}>
              <AiFillGithub />
              Git
            </motion.div>
            <motion.div className='hexagon' variants={item}>
              <DiJqueryLogo />
              JQuery
            </motion.div>
          </div>
          <div className='row'>
            <motion.div className='hexagon' variants={item}>
              <SiStyledcomponents />
              Styled
            </motion.div>
          </div>
        </div>
      </WrapSkills>
    </Wrapper>
  )
}

export default Skills
