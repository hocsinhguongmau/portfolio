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
import { NavLink } from 'react-router-dom'

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
  gap: 0.75rem;
  a{
  color: ${(props: ThemePropsType) => (props.toggle ? TEXT_DARK : TEXT_LIGHT)};
  font-size: 1.5rem;
  line-height: 0.75rem;
  padding: 0.75rem;
  border-radius: 100%;
  display: block;
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
        <NavLink
          to='/'
          className={(navData) => (navData.isActive ? 'active' : '')}>
          <AiFillHome />
        </NavLink>
      </li>
      <li>
        <NavLink
          to='/about'
          className={(navData) => (navData.isActive ? 'active' : '')}>
          <FaUserAlt />
        </NavLink>
      </li>
      <li>
        <NavLink
          to='/projects'
          className={(navData) => (navData.isActive ? 'active' : '')}>
          <GoProject />
        </NavLink>
      </li>
      <li>
        <NavLink
          to='/skills'
          className={(navData) => (navData.isActive ? 'active' : '')}>
          <HiOutlineCode />
        </NavLink>
      </li>
    </List>
  )
}

export default Navigation
