import React from 'react'
import Spinner from './elements/Spinner'
import BackButtom from './elements/BackButtom'
import {
  Container,
  Row,
  Col,
  Image
} from 'react-bootstrap'

import { StyledMovie } from './styles/StyledMovie'


import { useMovieFetch } from './hooks/useMovieFetch'
const Movie = ({ movieId }) => {

  const [movie, loading, error] = useMovieFetch(movieId)
  console.log(movie)
  
  if(error) return <div>Something went wrong...</div>
  if(loading) return <Spinner />

  return (
    <React.Fragment>
      <StyledMovie>
        <Container>
          <Row>
              <Col md="4"> <Image src={movie.Poster} /> </Col>
              <Col md="8">
                <h1> {movie.Title} <span> {movie.Metascore} </span> </h1>
                <ul>
                  <li> {movie.Year} </li>
                  <li> {movie.Type} </li>
                  <li> {movie.Runtime} </li>
                  <li> {movie.Rated} </li>
                  <li> {movie.Genre} </li>
                </ul>
                <h2>Sinopse</h2>
                <p>{movie.Plot} </p>
                <h2>Actors</h2>
                <p> {movie.Actors} </p>
                <h2>Awards</h2>
                <p> {movie.Awards} </p>
              </Col>
            </Row>
          </Container>
      </StyledMovie>
      <BackButtom />
    </React.Fragment>
  )
}

export default Movie