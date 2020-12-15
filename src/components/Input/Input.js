import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { border, color } from 'styled-system'

const WrapperInput = styled.div`
  display: grid;
  align-items: center;
`

const InputStyled = styled.input`
  cursor: text;
  width: 100%;
  color: grey;
  border: 2px solid grey;
  border-radius: 4px;
  height: 30px;
  font-size: 18px;
  padding-left: 5px;

  :focus {
    outline: 0px;
  }

  ${border}
  ${color}
`

const Input = ({ handleChange, ...props }) => {
  return (
    <WrapperInput>
      <InputStyled {...props} onChange={(e) => handleChange(e)} />
    </WrapperInput>
  )
}

Input.propTypes = {
  handleChange: PropTypes.func
}

export default Input
