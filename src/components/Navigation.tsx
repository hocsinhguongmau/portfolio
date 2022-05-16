import React from 'react'

import { AiFillHome } from 'react-icons/ai'
import { FaUserAlt } from 'react-icons/fa'
import { GoProject } from 'react-icons/go'
import { HiOutlineCode } from 'react-icons/hi'
import styled from 'styled-components'

const List = styled.div`
  position: absolute;
  top: 10px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 100;
  background: violet;
  border-radius: 100%;
  padding: 5px;
`

function Navigation() {
  return <List></List>
}

export default Navigation
