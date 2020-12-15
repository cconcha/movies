import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import PropTypes from 'prop-types'

import { Wrapper, Button, Title, Text, Box, Image, Tag } from '../components'
import { onGetFilmById } from '../redux/ducks/film'

const FilmPage = ({ match, history }) => {
  const dispatch = useDispatch()

  const { object: film } = useSelector((state) => state.film.get)
  const [seasonActive, setSeasonActive] = useState(1)

  useEffect(() => {
    dispatch(onGetFilmById(match.params.id))
  }, [dispatch, match.params.id])

  const handleSeasonSelect = (season) => {
    setSeasonActive(season)
  }

  return (
    film && (
      <Wrapper>
        <Box display="grid" gridGap="20px" gridTemplateColumns="2fr 10fr" mb="30px">
          <Button onClick={() => history.push('/')}>
            <Title type="h3" title="Back" noMargin />
          </Button>
          <Title type="h1" title="Shows" />
        </Box>
        <Box display="grid" gridGap="50px" gridTemplateColumns="4fr 8fr">
          <Box>
            <Box boxShadow="0px 10px 14px #0000005c">
              <Image
                height="500px"
                src={film.poster_path ? `http://image.tmdb.org/t/p/w600_and_h900_bestv2/${film.poster_path}` : null}
              />
              <Title title={film.name} type="h2" />
            </Box>
          </Box>
          <Box>
            <Title type="h2" title="seasons" noMargin />
            <Box display="grid" gridGap="5px" gridTemplateColumns={`repeat(12, 1fr)`}>
              {film.seasons.map((season, index) => {
                return (
                  <Tag
                    key={`i-${index + 2}`}
                    bg={seasonActive === season.season_number ? '#ececec' : null}
                    handleClick={() => handleSeasonSelect(season.season_number)}
                  >
                    {season.season_number}
                  </Tag>
                )
              })}
            </Box>
            <Box mt="50px">
              {film.seasons.map((season, index) => {
                return (
                  <Box key={`i-${index + 1}`}>
                    <Box
                      display="grid"
                      gridGap="50px"
                      gridTemplateColumns="4fr 8fr"
                      py="12px"
                      borderTop="1px solid #8a8989c7"
                    >
                      <Text>{season.season_number}</Text>
                      <Text>{season.name}</Text>
                    </Box>
                    {seasonActive === season.season_number && season.overview && (
                      <Box pl="40px" pb="5px" fontWeight="bold">
                        <Text fontFamily="math">{season.overview}</Text>
                      </Box>
                    )}
                  </Box>
                )
              })}
            </Box>
          </Box>
        </Box>
      </Wrapper>
    )
  )
}

FilmPage.propTypes = {
  history: PropTypes.instanceOf(Object).isRequired,
  match: PropTypes.instanceOf(Object).isRequired
}

export default FilmPage
