import React from 'react'
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'
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

const NavWrapper = styled.nav`
  position: absolute;
  bottom: 0;
  right: 10px;
  z-index: 100;
`

const Navigation = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0;
  font-size: 1.875rem;
  line-height: 2.25rem;
  list-style: none;
  margin: 0;
  @media screen and (max-width: 767px) {
    font-size: 1.5rem;
    line-height: 1rem;
  }
`

const NavLink = styled.a`
  padding: 0.5rem;
  display: block;
  border-radius: 100%;
  color: ${(props: ThemePropsType) => (props.toggle ? TEXT_DARK : TEXT_LIGHT)};
  line-height: 1.2rem;
  &:hover {
    background: ${(props: ThemePropsType) =>
      props.toggle ? BODY_LIGHT : BODY_DARK};
    color: ${(props: ThemePropsType) =>
      props.toggle ? TEXT_LIGHT : TEXT_DARK};
  }
`

const Line = styled.span`
  display: block;
  width: 0.25rem;
  height: 6rem;
  background: ${(props: ThemePropsType) =>
    props.toggle ? TEXT_DARK : TEXT_LIGHT};
  margin-left: auto;
  margin-right: auto;
  @media screen and (max-width: 767px) {
    height: 3rem;
  }
`

function Social() {
  const toggle = useToggleStore((state) => state.toggle)
  return (
    <NavWrapper>
      <Navigation>
        <li>
          <NavLink
            href='https://github.com/hocsinhguongmau'
            target='_blank'
            toggle={toggle}>
            <AiFillGithub />
          </NavLink>
        </li>
        <li>
          <NavLink
            href='https://www.linkedin.com/in/thang-nguyen-914764173/'
            target='_blank'
            toggle={toggle}>
            <AiFillLinkedin />
          </NavLink>
        </li>
        <li>
          <Line toggle={toggle} />
        </li>
      </Navigation>
    </NavWrapper>
  )
}

export default Social
