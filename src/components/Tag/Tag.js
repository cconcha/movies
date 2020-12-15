import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { color, size } from 'styled-system'

const TagStyled = styled.div`
  border: 1px solid #c0c0c0;
  display: grid;
  padding: 10px;
  box-shadow: 0px 4px 5px grey;
  width: 20px;
  margin-right: 7px;
  cursor: pointer;
  ${color};
  ${size};
`

const TextStyled = styled.span`
  font-size: 20px;
  font-weight: bold;
  align-self: center;
  justify-self: center;
  color: #8a8989c7;
`

const Tag = ({ children, handleClick, ...props }) => (
  <TagStyled {...props} onClick={handleClick}>
    <TextStyled>{children}</TextStyled>
  </TagStyled>
)

Tag.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.element])
}

export default Tag
