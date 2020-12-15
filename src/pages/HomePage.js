import React, { useEffect, useState, useCallback, useRef } from 'react'
import PropTypes from 'prop-types'
import { useSelector, useDispatch } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

import { Card, Wrapper, Title, Box, Input } from '../components'
import { onGetFilms, onSearchFilm } from '../redux/ducks/film'

const HomePage = ({ history }) => {
  const dispatch = useDispatch()

  const [showSearch, setShowSearch] = useState(false)
  const [query, setQuery] = useState(null)
  const [pageNumber, setPageNumber] = useState(1)

  const observer = useRef()
  const { array: films } = useSelector((state) => state.film.list)
  let posterSrc

  useEffect(() => {
    if (query) {
      dispatch(onSearchFilm(query, pageNumber))
    } else {
      dispatch(onGetFilms(pageNumber))
    }
  }, [dispatch, pageNumber, query])

  const lastBookElementRef = useCallback((node) => {
    if (observer.current) observer.current.disconnect()
    observer.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) setPageNumber((prevPageNumber) => prevPageNumber + 1)
    })
    if (node) observer.current.observe(node)
  }, [])

  const handleShowSearch = () => {
    setShowSearch(!showSearch)
  }

  const handleSearch = (e) => {
    setQuery(e.target.value)
    setPageNumber(1)
  }

  const handleClickFilm = (id) => {
    history.push(`/film/${id}`)
  }

  return (
    <Wrapper>
      <Box display="grid" gridTemplateColumns="repeat(2, 1fr)" gridGap="40px" mb="30px">
        <Title title="shows" type="h1" weight="200" />
        {showSearch ? (
          <Box display="grid" gridTemplateColumns="1fr 11fr">
            <Box
              display="grid"
              justifySelf="left"
              alignSelf="center"
              style={{ cursor: 'pointer' }}
              onClick={() => handleShowSearch()}
            >
              <FontAwesomeIcon icon={faSearch} size="lg" color="grey" />
            </Box>
            <Input handleChange={(e) => handleSearch(e)} />
          </Box>
        ) : (
          <Box
            display="grid"
            justifySelf="right"
            alignSelf="center"
            style={{ cursor: 'pointer' }}
            onClick={() => handleShowSearch()}
          >
            <FontAwesomeIcon icon={faSearch} size="lg" color="grey" />
          </Box>
        )}
      </Box>
      {films.length === 0 ? (
        <Box mt="150px" display="grid" justifyItems="center">
          <Title type="h1" title="No results, please try another search ..." />
        </Box>
      ) : (
        <Box display="grid" gridTemplateColumns="repeat(3, 1fr)" gridGap="20px">
          {films &&
            films.map((film, index) => {
              posterSrc = film.poster_path ? `http://image.tmdb.org/t/p/w300_and_h300_bestv2${film.poster_path}` : null
              if (films.length === index + 1) {
                return (
                  <Card
                    reference={lastBookElementRef}
                    key={`id-film${index + 1}`}
                    url={posterSrc}
                    text={film.original_name}
                    rating={film.vote_average}
                    // actors={}
                    handleClick={() => handleClickFilm(film.id)}
                  />
                )
              } else {
                return (
                  <Card
                    key={`id-films${index + 2}`}
                    url={posterSrc}
                    text={film.original_name}
                    rating={film.vote_average}
                    // actors={}
                    handleClick={() => handleClickFilm(film.id)}
                  />
                )
              }
            })}
        </Box>
      )}
    </Wrapper>
  )
}

HomePage.propTypes = {
  history: PropTypes.instanceOf(Object).isRequired
}

export default HomePage
