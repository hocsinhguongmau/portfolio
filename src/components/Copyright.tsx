import React from 'react'
import styled from 'styled-components'

const WrapCopy = styled.div`
  width: 100%;
  bottom: 1rem;
  font-size: 1rem;
  z-index: 10;
  position: absolute;
  left: 0;
  padding: 0 1rem;
  box-sizing: border-box;
  text-align: center;
`

function Copyright() {
  return <WrapCopy>2022</WrapCopy>
}

export default Copyright
