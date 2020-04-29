import React, { useState } from 'react'

import {
  RECOMMEND_BASE_URL,
  SEARCH_BASE_URL
} from '../Api.js'

// Import Components
import SearchBar from './elements/SearchBar'
import Grid from './elements/Grid'
import MovieThumb from './elements/MovieThumb'
import Spinner from './elements/Spinner'

import { StyledHomeGrid } from './styles/StyledHomeGrid'

import {
  Container
} from 'react-bootstrap'

// Custom Hook
import { useHomeFetch } from './hooks/useHomeFetch'

const Home = () => {

  const [{ state, loading, error}, fetchMovies] = useHomeFetch()
  const [serachTerm, setSEarchTerm] = useState('')

  const searchMovies = search => {
    const endpoint = search ? SEARCH_BASE_URL + search : RECOMMEND_BASE_URL

    setSEarchTerm(search)
    fetchMovies(endpoint)
  }

  if(error) return <div>Something went wrong...</div>
  if(!state.movies[0]) return <Spinner />
  if(loading) return <Spinner />

  return (
    <React.Fragment>
      <StyledHomeGrid>
        <Container>
          <Grid header={serachTerm ? 'Search Result' : 'Recommended Movies'}>
            {state.movies.map(movie => (
              <MovieThumb key={movie.imdbID} image={movie.Poster} movieTitle={movie.Title} movieId={movie.imdbID} />
            ))}
          </Grid>
        </Container>
      </StyledHomeGrid>
      <SearchBar callback={searchMovies} />
    </React.Fragment>
  )
}

export default Home
