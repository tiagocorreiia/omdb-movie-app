import React from 'react'
import { Link } from '@reach/router'

// Bootstrap import
import {
  Container,
  Row,
  Col,
  Image
} from 'react-bootstrap'

import { StyledHeader } from '../styles/StyledHeader'
import Logo from '../images/logo.svg'

const Header = () => (
  <StyledHeader>
    <Container>
      <Row>
        <Col>
          <Link to="/"><Image src={Logo} fluid></Image></Link>
        </Col>
      </Row>
    </Container>
  </StyledHeader>
)

export default Header