import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const ImageStyled = styled.div`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  max-height: ${(props) => props.height};
  overflow: hidden;
  object-fit: cover;

  > img {
    object-fit: cover;
  }
`

const Image = (props) => {
  return (
    <ImageStyled {...props} onClick={(e) => (props.handleClick ? props.handleClick(e) : null)}>
      {props.src ? (
        <img src={props.src} alt={props.alt} width="100%" />
      ) : (
        <svg
          width={props.width}
          height={props.height}
          xmlns="http://www.w3.org/2000/svg"
          aria-label={`A generic square placeholder image with a white border around it, making it resemble a photograph taken with an old instant camera: ${props.width}x${props.height}`}
        >
          <rect width="100%" fill="#868e96" />
          <text x="50%" y="50%" fill="#dee2e6" dy=".3em"></text>
        </svg>
      )}
    </ImageStyled>
  )
}

Image.defaultProps = {
  handleClick: null,
  src: '',
  alt: '...',
  width: '100%',
  height: '200px'
}

Image.propTypes = {
  handleClick: PropTypes.func,
  src: PropTypes.any,
  alt: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string
}

export default Image
