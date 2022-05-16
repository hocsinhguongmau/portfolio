import React from 'react'
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'
import styled from 'styled-components'

const NavWrapper = styled.nav`
  position: absolute;
  bottom: 0;
  left: 10px;
  z-index: 100;
`

const Navigation = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0;
  font-size: 1.875rem;
  line-height: 2.25rem;
  color: #000;
  list-style: none;
`

const NavLink = styled.a`
  padding: 0.5rem;
  display: block;
  transition: all ease-in 0.3s;
  border-radius: 100%;
  color: #000;
  line-height: 1.2rem;
  &:hover {
    background: #000;
    color: #fff;
  }
`

const Line = styled.span`
  display: block;
  width: 0.25rem;
  height: 6rem;
  background: #000;
  margin-left: auto;
  margin-right: auto;
`

function Social() {
  return (
    <NavWrapper>
      <Navigation>
        <li>
          <NavLink href='https://github.com/thang241190' target='_blank'>
            <AiFillGithub />
          </NavLink>
        </li>
        <li>
          <NavLink
            href='https://www.linkedin.com/in/thang-nguyen-914764173/'
            target='_blank'>
            <AiFillLinkedin />
          </NavLink>
        </li>
        <li>
          <Line />
        </li>
      </Navigation>
    </NavWrapper>
  )
}

export default Social
