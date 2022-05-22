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
const Wrapper = styled.div`
  margin-left: auto;
  margin-right: auto;
  position: relative;
  text-align: center;
  max-width: 48rem;
`
const Title = styled.h1`
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

  return (
    <div>
      <Wrapper>
        <Title>Skills</Title>
        <WrapSkills toggle={toggle}>
          <div className='row'>
            <div className='hexagon'>
              <FaReact />
              React
            </div>
          </div>
          <div className='row'>
            <div className='hexagon'>
              <FaReact />
              React
            </div>
            <div className='hexagon'>
              <FaReact />
              React
            </div>
          </div>
          <div className='row'>
            <div className='hexagon'>
              <FaReact />
              React
            </div>
            <div className='hexagon'>
              <FaReact />
              React
            </div>
            <div className='hexagon'>
              <FaReact />
              React
            </div>
          </div>
          <div className='row'>
            <div className='hexagon'>
              <FaReact />
              React
            </div>
            <div className='hexagon'>
              <FaReact />
              React
            </div>
          </div>
          <div className='row'>
            <div className='hexagon'>
              <FaReact />
              React
            </div>
          </div>
        </WrapSkills>
      </Wrapper>
    </div>
  )
}

export default Skills
