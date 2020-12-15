import React from 'react'
import { Container } from 'react-bootstrap'
import styled from 'styled-components'
import { space, layout } from 'styled-system'

const ContainerStyled = styled(Container)`
  max-width: 1100px;
  margin: auto;
  &&& {
    ${space}
    ${layout}
  }
`

const Wrapper = ({ children, ...props }) => {
  return <ContainerStyled {...props}>{children}</ContainerStyled>
}

export default Wrapper
