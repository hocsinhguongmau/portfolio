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
  SVG_DARK_1,
  SVG_DARK_2,
  SVG_DARK_3,
  SVG_LIGHT_1,
  SVG_LIGHT_2,
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
  @media screen and (max-width: 767px) {
    font-size: 1.5rem;
    padding-bottom: 0.5rem;
  }
`
const WrapSkills = styled.div`
  margin: 0;
 .row{
  display: flex;
  flex-direction: row;
  justify-content: center;
  &:nth-child(odd){
    flex-direction: row-reverse;
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
  font-size:0.75rem;
  @media screen and (max-width: 767px) {
    width:3.4rem;
    height: 3.4rem;
    margin-top: -0.8rem;
    font-size: 0.5rem;
  }
  display: flex;
    flex-direction: column;
    justify-content: center;
  .hexagon-border{
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 0.25rem;
    width: 3.2rem;
    height:3.2rem;
    margin: auto;
    background: ${(props: ThemePropsType) =>
      props.toggle ? BACKGROUND_DARK : BACKGROUND_LIGHT};
      clip-path: polygon(50% 0, 100% 25%, 100% 75%, 50% 100%, 0 75%, 0 25%);
  }
  &:hover {
    background: ${(props: ThemePropsType) =>
      props.toggle ? SVG_DARK_3 : SVG_LIGHT_3};
  }
  svg {
    display: block;
    font-size: 1.5rem;
    margin-left: auto;
    margin-right: auto;
    @media screen and (max-width: 767px) {
      font-size: 1rem;
    }
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
              <div className='hexagon-border'>
                <FaReact />
                React
              </div>
            </motion.div>
          </motion.div>
          <div className='row'>
            <motion.div className='hexagon' variants={item}>
              <div className='hexagon-border'>
                <SiNextdotjs />
                Next
              </div>
            </motion.div>
            <motion.div className='hexagon' variants={item}>
              <div className='hexagon-border'>
                <DiJavascript1 />
                Javascript
              </div>
            </motion.div>
          </div>
          <div className='row'>
            <motion.div className='hexagon' variants={item}>
              <div className='hexagon-border'>
                <AiFillHtml5 />
                HTML5
              </div>
            </motion.div>
            <motion.div className='hexagon' variants={item}>
              <div className='hexagon-border'>
                <DiCss3 />
                CSS3
              </div>
            </motion.div>
            <motion.div className='hexagon' variants={item}>
              <div className='hexagon-border'>
                <SiTailwindcss />
                Tailwinds
              </div>
            </motion.div>
          </div>
          <div className='row'>
            <motion.div className='hexagon' variants={item}>
              <div className='hexagon-border'>
                <SiTypescript />
                Typescript
              </div>
            </motion.div>
            <motion.div className='hexagon' variants={item}>
              <div className='hexagon-border'>
                <SiJest />
                Jest
              </div>
            </motion.div>
            <motion.div className='hexagon' variants={item}>
              <div className='hexagon-border'>
                <SiCypress />
                Cypress
              </div>
            </motion.div>
            <motion.div className='hexagon' variants={item}>
              <div className='hexagon-border'>
                <SiTestinglibrary />
                RTL
              </div>
            </motion.div>
          </div>
          <div className='row'>
            <motion.div className='hexagon' variants={item}>
              <div className='hexagon-border'>
                <SiGraphql />
                GraphQL
              </div>
            </motion.div>
            <motion.div className='hexagon' variants={item}>
              <div className='hexagon-border'>
                <SiStorybook />
                Storybook
              </div>
            </motion.div>
            <motion.div className='hexagon' variants={item}>
              <div className='hexagon-border'>
                <SiD3Dotjs />
                D3.js
              </div>
            </motion.div>
          </div>
          <div className='row'>
            <motion.div className='hexagon' variants={item}>
              <div className='hexagon-border'>
                <AiFillGithub />
                Git
              </div>
            </motion.div>
            <motion.div className='hexagon' variants={item}>
              <div className='hexagon-border'>
                <DiJqueryLogo />
                JQuery
              </div>
            </motion.div>
          </div>
          <div className='row'>
            <motion.div className='hexagon' variants={item}>
              <div className='hexagon-border'>
                <SiStyledcomponents />
                Styled
              </div>
            </motion.div>
          </div>
        </div>
      </WrapSkills>
    </Wrapper>
  )
}

export default Skills
