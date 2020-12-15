import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { Box, Title, Image, Text } from '../../components'

const BoxStyled = styled(Box)`
  position: absolute;
  margin-left: -18px;
  margin-top: -20px;
  width: 390px;
  background-color: white;
  box-shadow: 0px 10px 14px #0000005c;
  cursor: pointer;
`

const Card = ({ text, url, rating, handleClick, reference, actors }) => {
  const [showInfo, setShowInfo] = useState(false)

  const handleMouseEnter = () => {
    setShowInfo(true)
  }

  const handleMouseLeave = () => {
    setShowInfo(false)
  }

  return (
    <Box ref={reference}>
      {showInfo ? (
        <BoxStyled
          onClick={handleClick}
          onMouseEnter={() => handleMouseEnter()}
          onMouseLeave={() => handleMouseLeave()}
        >
          <Image src={url} alt="Image not found..." />
          <Box display="grid" gridTemplateColumns="11fr 1fr" gridGap="15px">
            <Title title={text} type="h3" width="250px" />
            <Box display="grid" alignSelf="center">
              <FontAwesomeIcon icon={faStar} color="grey" />
              <Text>{rating}</Text>
            </Box>
          </Box>
          <Box display="grid" gridTemplateColumns="2fr 7fr" gridGap="15px" mx="7px" mb="10px">
            <Text color="grey" fontFamily="math" fontSize="18px" fontWeight="600">
              Featuring:
            </Text>
            {actors &&
              actors.map((actor) => {
                return (
                  <Text color="grey" fontFamily="math" fontSize="18px">
                    {actor}{' '}
                  </Text>
                )
              })}
          </Box>
        </BoxStyled>
      ) : (
        <Box
          cursor="pointer"
          boxShadow="0px 10px 14px #0000005c"
          onClick={handleClick}
          onMouseEnter={() => handleMouseEnter()}
          onMouseLeave={() => handleMouseLeave()}
        >
          <Image src={url} alt="Image not found..." />
          <Title title={text} type="h3" width="300px" />
        </Box>
      )}
    </Box>
  )
}

Card.propTypes = {
  url: PropTypes.string,
  text: PropTypes.string,
  handleClick: PropTypes.func,
  rating: PropTypes.number,
  reference: PropTypes.any,
  actors: PropTypes.any
}

export default Card
