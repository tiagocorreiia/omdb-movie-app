import React from 'react'
import { Link } from '@reach/router'

import { StyledMovieThumb } from '../styles/StyledMovieThumb'

const MovieThumb = ({image, movieId, movieTitle}) => (
  <StyledMovieThumb>
    <Link to={`/${movieId}`} ><img src={image} alt="moviethumb" title={movieTitle}/></Link>
  </StyledMovieThumb>
)

export default MovieThumb