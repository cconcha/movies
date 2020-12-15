import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { color, typography, space } from 'styled-system'

const UlStyled = styled.ul`
  overflow: hidden;
  width: 100%;
  list-style-type: none;

  ${color}
  ${typography}
  ${space}
`

const LiStyled = styled.li`
  float: left;
  cursor: pointer;
`

const AStyled = styled.a`
  float: left;
  text-align: center;
  text-decoration: none;
  position: relative;
  box-shadow: 0px 2px 4px grey;
  background-color: #ececec;
  padding: 0px 10px;

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    margin-top: -26px;
    border-top: 26px solid transparent;
    border-bottom: 26px solid transparent;
    border-right: 1em solid;
    right: 78px;
    z-index: 2;
    border-right-color: #ececec;
  }
`
const Button = ({ children, onClick }) => {
  return (
    <UlStyled>
      <LiStyled>
        <AStyled onClick={onClick}>{children}</AStyled>
      </LiStyled>
    </UlStyled>
  )
}

Button.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
  onClick: PropTypes.func
}

export default Button
