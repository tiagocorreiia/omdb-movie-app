import React from 'react'
import { Link } from '@reach/router'
import {
  Container
} from 'react-bootstrap'
import { StyledBackButtom } from '../styles/StyledBackButtom'

const BackButtom = () => (
  <StyledBackButtom>
    <Container>
      <Link to="/" >Back</Link>
    </Container>
  </StyledBackButtom>
)

export default BackButtom