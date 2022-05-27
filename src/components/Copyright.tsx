import React from 'react'
import styled from 'styled-components'

const WrapCopy = styled.div`
  width: 100%;
  font-size: 1rem;
  z-index: 10;
  padding: 0 1rem 1rem;
  box-sizing: border-box;
  text-align: center;
`

function Copyright() {
  return <WrapCopy>&copy;2022</WrapCopy>
}

export default Copyright
