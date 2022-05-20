import React from 'react'

import { AiFillHome } from 'react-icons/ai'
import { FaUserAlt } from 'react-icons/fa'
import { GoProject } from 'react-icons/go'
import { HiOutlineCode } from 'react-icons/hi'
import styled from 'styled-components'
import useToggleStore from '~/store/themeStore'
import {
  BACKGROUND_DARK,
  BACKGROUND_LIGHT,
  BODY_DARK,
  BODY_LIGHT,
  TEXT_DARK,
  TEXT_LIGHT,
} from '~/styled/Themes'

const List = styled.div`
  position: absolute;
  top: 1rem;
  left: 50%;
  transform: translateX(-50%);
  z-index: 100;
  background: ${(props: ThemePropsType) =>
    props.toggle ? BACKGROUND_DARK : BACKGROUND_LIGHT};
  padding: 0.5rem;
  border-radius: 9999px;
  list-style: none;
  display: flex;
  flex-direction: row;
  transition: all 0.3s ease-in;
  gap: 0.75rem;
`
const Icon = styled.a`
  color: ${(props: ThemePropsType) => (props.toggle ? TEXT_DARK : TEXT_LIGHT)};
  font-size: 1.5rem;
  line-height: 0.75rem;
  padding: 0.75rem;
  border-radius: 100%;
  display: block;
  transition: all ease-in 0.3s;
  &:hover,
  &.active {
    background: ${(props: ThemePropsType) =>
      props.toggle ? BODY_DARK : BODY_LIGHT};
    color: ${(props: ThemePropsType) =>
      props.toggle ? TEXT_DARK : TEXT_LIGHT};
  }
`

function Navigation() {
  const toggle = useToggleStore((state) => state.toggle)
  return (
    <List toggle={toggle}>
      <li>
        <Icon href='/' className='active' toggle={toggle}>
          <AiFillHome />
        </Icon>
      </li>
      <li>
        <Icon href='/' toggle={toggle}>
          <FaUserAlt />
        </Icon>
      </li>
      <li>
        <Icon href='/' toggle={toggle}>
          <GoProject />
        </Icon>
      </li>
      <li>
        <Icon href='/' toggle={toggle}>
          <HiOutlineCode />
        </Icon>
      </li>
    </List>
  )
}

export default Navigation
