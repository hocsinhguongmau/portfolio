import React from 'react'
import { AiOutlineMail, AiOutlinePhone } from 'react-icons/ai'
import { FaDumbbell, FaMusic } from 'react-icons/fa'
import { GoLocation } from 'react-icons/go'
import { HiOutlineCode } from 'react-icons/hi'
import styled from 'styled-components'
import useToggleStore from '~/store/themeStore'
import { TEXT_DARK, TEXT_LIGHT } from '~/styled/Themes'

const WrapInfo = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0.5rem 0;
  li {
    margin: 0;
    width: 100%;
    padding: 0.5rem 1rem;
    font-size: 0.75rem;

    a {
      color: ${(props: ThemePropsType) =>
        props.toggle ? TEXT_DARK : TEXT_LIGHT};
      text-decoration: none;
    }
    svg {
      line-height: 1rem;
      vertical-align: bottom;
      font-size: 1rem;
      margin-right: 0.25rem;
    }
  }
`

const InfoTitle = styled.h2`
  margin: 0;
  padding: 0;
  margin-top: 2rem;
  &:first-child {
    margin-top: 0;
  }
  font-size: 1.2rem;
  font-weight: bold;
  text-align: center;
  color: ${(props: ThemePropsType) => (props.toggle ? TEXT_DARK : TEXT_LIGHT)};
`

const WrapInterest = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 1.5rem;
  padding: 0 1rem;
`

const Interest = styled.div`
  font-size: 1rem;
  text-align: center;
  margin-top: 1rem;
  svg {
    font-size: 1.75rem;
    display: block;
    margin: auto;
    margin-bottom: 0.5rem;
  }
`

function Info() {
  const toggle = useToggleStore((state) => state.toggle)
  return (
    <div>
      <InfoTitle toggle={toggle}>Contact</InfoTitle>
      <WrapInfo toggle={toggle}>
        <li>
          <a href='mailto:thangnguyen24111990@gmail.com'>
            <AiOutlineMail />
            thangnguyen24111990@gmail.com
          </a>
        </li>
        <li>
          <AiOutlinePhone />
          +358449158001
        </li>
        <li>
          <GoLocation />
          Helsinki, Finland
        </li>
      </WrapInfo>
      <InfoTitle toggle={toggle}>Hobbies</InfoTitle>
      <WrapInterest>
        <Interest>
          <FaMusic />
          Music
        </Interest>
        <Interest>
          <HiOutlineCode />
          Programing
        </Interest>
        <Interest>
          <FaDumbbell />
          Workout
        </Interest>
      </WrapInterest>
    </div>
  )
}

export default Info
