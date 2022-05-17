import React from 'react'

import { AiFillHome } from 'react-icons/ai'
import { FaUserAlt } from 'react-icons/fa'
import { GoProject } from 'react-icons/go'
import { HiOutlineCode } from 'react-icons/hi'
import styled from 'styled-components'

const List = styled.div`
  position: absolute;
  top: 1rem;
  left: 50%;
  transform: translateX(-50%);
  z-index: 100;
  background: violet;
  padding: 0.5rem;
  border-radius: 9999px;
  list-style: none;
  display: flex;
  flex-direction: row;
  gap: 0.75rem;
`
const Icon = styled.a`
  color: #fff;
  font-size: 1.5rem;
  line-height: 0.75rem;
  padding: 0.75rem;
  border-radius: 100%;
  display: block;
  transition: all ease-in 0.3s;
  a &:hover,
  &.active {
    background: #fff;
    color: violet;
  }
`

function Navigation() {
  return (
    <List>
      <li>
        <Icon href='/' className='active'>
          <AiFillHome />
        </Icon>
      </li>
      <li>
        <Icon href='/'>
          <FaUserAlt />
        </Icon>
      </li>
      <li>
        <Icon href='/'>
          <GoProject />
        </Icon>
      </li>
      <li>
        <Icon href='/'>
          <HiOutlineCode />
        </Icon>
      </li>
    </List>
  )
}

export default Navigation
