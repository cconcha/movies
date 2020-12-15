import axios from 'axios'

// Action Types
export const Types = {
  GET_FILMS_REQUEST: 'GET_FILMS_REQUEST',
  GET_FILMS_SUCCESS: 'GET_FILMS_SUCCESS',
  GET_FILMS_ERROR: 'GET_FILMS_ERROR',
  GET_FILM_BY_ID_REQUEST: 'GET_FILM_BY_ID_REQUEST',
  GET_FILM_BY_ID_SUCCESS: 'GET_FILM_BY_ID_SUCCESS',
  GET_FILM_BY_ID_ERROR: 'GET_FILM_BY_ID_ERROR',
  SEARCH_FILMS_REQUEST: 'SEARCH_FILMS_REQUEST',
  SEARCH_FILMS_SUCCESS: 'SEARCH_FILMS_SUCCESS',
  SEARCH_FILMS_ERROR: 'SEARCH_FILMS_ERROR'
}

// Reducer
const initialState = {
  get: {
    object: null,
    error: null
  },
  list: {
    array: [],
    error: null
  },
  error: null,
  isLoading: false
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case Types.GET_FILMS_REQUEST:
    case Types.SEARCH_FILMS_REQUEST:
    case Types.GET_FILM_BY_ID_REQUEST:
      return {
        ...state,
        error: null,
        isLoading: true
      }
    case Types.GET_FILMS_SUCCESS:
      if (action.page === 1) {
        return {
          ...state,
          list: { array: action.payload },
          isLoading: false
        }
      } else {
        return {
          ...state,
          list: { array: [...state.list.array, ...action.payload] },
          isLoading: false
        }
      }
    case Types.GET_FILM_BY_ID_SUCCESS:
      return {
        ...state,
        get: { object: action.payload },
        isLoading: false
      }
    case Types.SEARCH_FILMS_SUCCESS:
      if (action.page === 1) {
        return {
          ...state,
          list: { array: action.payload },
          isLoading: false
        }
      } else {
        return {
          ...state,
          list: { array: [...state.list.array, ...action.payload] },
          isLoading: false
        }
      }

    case Types.GET_FILMS_ERROR:
    case Types.SEARCH_FILMS_ERROR:
    case Types.GET_FILM_BY_ID_ERROR:
      return {
        ...state,
        error: action.payload,
        isLoading: false
      }
    default:
      return state
  }
}

export const onGetFilms = (page) => async (dispatch) => {
  dispatch({ type: Types.GET_FILMS_REQUEST })
  try {
    axios({
      method: 'GET',
      url: `https://api.themoviedb.org/3/tv/popular?api_key=b2907782d07859a652052d3bae537475&language=en-US&page=${page}`
    }).then(
      (res) => {
        dispatch({ type: Types.GET_FILMS_SUCCESS, payload: res.data.results, page: page })
      },
      (error) => {
        dispatch({ type: Types.GET_FILMS_ERROR, payload: error })
      }
    )
  } catch (error) {
    dispatch({ type: Types.GET_FILMS_ERROR, payload: error })
  }
}

export const onGetFilmById = (id) => async (dispatch) => {
  dispatch({ type: Types.GET_FILM_BY_ID_REQUEST })
  try {
    axios({
      method: 'GET',
      url: `https://api.themoviedb.org/3/tv/${id}?api_key=b2907782d07859a652052d3bae537475&language=en-US`
    }).then(
      (res) => {
        dispatch({ type: Types.GET_FILM_BY_ID_SUCCESS, payload: res.data })
      },
      (error) => {
        dispatch({ type: Types.GET_FILM_BY_ID_ERROR, payload: error })
      }
    )
  } catch (error) {
    dispatch({ type: Types.GET_FILM_BY_ID_ERROR, payload: error })
  }
}

export const onSearchFilm = (query, page) => async (dispatch) => {
  dispatch({ type: Types.SEARCH_FILMS_REQUEST })
  try {
    let cancel
    axios({
      method: 'GET',
      url: `https://api.themoviedb.org/3/search/tv?api_key=b2907782d07859a652052d3bae537475&language=en-US&page=${page}&include_adult=true`,
      params: { query: query },
      cancelToken: new axios.CancelToken((c) => (cancel = c))
    }).then(
      (res) => {
        dispatch({ type: Types.SEARCH_FILMS_SUCCESS, payload: res.data.results, page: page })
      },
      (error) => {
        dispatch({ type: Types.SEARCH_FILMS_ERROR, payload: error })
      }
    )
    return () => cancel()
  } catch (error) {
    dispatch({ type: Types.SEARCH_FILMS_ERROR, payload: error })
  }
}
