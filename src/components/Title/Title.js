import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

const baseStyle = css`
  text-transform: uppercase;
  font-weight: ${(props) => (props.weight ? props.weight : 'bold')};
  color: ${(props) => (props.color ? props.color : '#8a8989c7')};
  margin: ${(props) => (props.noMargin ? '0px' : '7px')};
  max-width: 100%;
  white-space: ${(props) => (props.width ? 'nowrap' : null)};
  overflow: ${(props) => (props.width ? 'hidden !important' : null)};
  text-overflow: ${(props) => (props.width ? 'ellipsis' : null)};
  width: ${(props) => (props.width ? props.width : 'auto')};
  text-align: ${(props) => {
    if (props.center) return 'center'
    if (props.right) return 'right'
    return 'left'
  }};
`

const TitleStyled = styled.div``

const H1Styled = styled.h1`
  font-size: 50px;
  ${baseStyle}
`

const H2Styled = styled.h2`
  font-size: 40px;
  ${baseStyle}
`

const H3Styled = styled.h3`
  font-size: 34px;
  ${baseStyle}
`

const Title = ({ type, title, noMargin, right, center, weight, color, width }) => {
  if (type === 'h1') {
    return (
      <TitleStyled>
        <H1Styled noMargin={noMargin} right={right} center={center} weight={weight} color={color} width={width}>
          {title}
        </H1Styled>
      </TitleStyled>
    )
  }
  if (type === 'h2') {
    return (
      <TitleStyled>
        <H2Styled noMargin={noMargin} right={right} center={center} weight={weight} color={color} width={width}>
          {title}
        </H2Styled>
      </TitleStyled>
    )
  }
  if (type === 'h3') {
    return (
      <TitleStyled>
        <H3Styled noMargin={noMargin} right={right} center={center} weight={weight} color={color} width={width}>
          {title}
        </H3Styled>
      </TitleStyled>
    )
  }
}

Title.defaultProps = {
  type: 'h1',
  title: '...',
  noMargin: false,
  right: false,
  center: false,
  color: null,
  weight: null,
  width: null
}

Title.propTypes = {
  type: PropTypes.oneOf(['h1', 'h2', 'h3']),
  title: PropTypes.string.isRequired,
  noMargin: PropTypes.bool,
  right: PropTypes.bool,
  center: PropTypes.bool,
  color: PropTypes.string,
  weight: PropTypes.string,
  width: PropTypes.string
}

export default Title
