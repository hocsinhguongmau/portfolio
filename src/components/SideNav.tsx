import React from 'react'

import { AiFillHome } from 'react-icons/ai'
import { FaUserAlt } from 'react-icons/fa'
import { GoProject } from 'react-icons/go'
import { HiOutlineCode } from 'react-icons/hi'
import styled from 'styled-components'
import useToggleStore from '~/store/themeStore'
import { SVG_DARK_3, SVG_LIGHT_3, TEXT_DARK, TEXT_LIGHT } from '~/styled/Themes'
import { NavLink } from 'react-router-dom'

const List = styled.div`
  list-style: none;
  li{
    padding: 0.75rem 1rem;
    border-top: 1px solid ${(props: ThemePropsType) =>
      props.toggle ? TEXT_DARK : TEXT_LIGHT};
    &:first-child{
      border: none;
    }
  }
  a{
  color: ${(props: ThemePropsType) => (props.toggle ? TEXT_DARK : TEXT_LIGHT)};
  display: block;
  text-decoration: none;
  line-height: 1.75rem;
  svg{
    font-size: 1.5rem;
    margin-right: 1rem;
    vertical-align: top;
  }
  &:hover,
  &.active {
    color: ${(props: ThemePropsType) =>
      props.toggle ? SVG_DARK_3 : SVG_LIGHT_3};
  }
`

function SideNav() {
  const toggle = useToggleStore((state) => state.toggle)
  return (
    <List toggle={toggle}>
      <li>
        <NavLink
          to='/'
          className={(navData) => (navData.isActive ? 'active' : '')}>
          <AiFillHome />
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to='/about'
          className={(navData) => (navData.isActive ? 'active' : '')}>
          <FaUserAlt />
          About
        </NavLink>
      </li>
      <li>
        <NavLink
          to='/projects'
          className={(navData) => (navData.isActive ? 'active' : '')}>
          <GoProject />
          Projects
        </NavLink>
      </li>
      <li>
        <NavLink
          to='/skills'
          className={(navData) => (navData.isActive ? 'active' : '')}>
          <HiOutlineCode />
          Skills
        </NavLink>
      </li>
    </List>
  )
}

export default SideNav
