import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { layout, color, typography, position, space, flexbox } from 'styled-system'

const TextStyled = styled.span`
  ${layout}
  ${color}
  ${typography}
  ${position}
  ${space}
  ${flexbox}
`

const Text = ({ children, ...props }) => <TextStyled {...props}>{children}</TextStyled>

Text.defaultProps = {
  color: '#8a8989c7'
}

Text.propTypes = {
  children: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
}

export default Text
