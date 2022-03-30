import React from 'react'
import { Card, Carousel, Container, Nav, Navbar, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Menu = () => {
  return (
    <div>
      

        <Navbar bg="dark" variant="dark">
          <Container>
          <Navbar.Brand href="/objeto">Navbar</Navbar.Brand>
          <Nav className="me-auto">

            <Link className="nav-link" to="/carros">Carros</Link>
            <Link className="nav-link" to="/array">Array</Link>
            <Link className="nav-link" to="/objeto">Lugares</Link>

          </Nav>
          </Container>
        </Navbar>

        <br />

        <Container className="justify-content-center" style={{  }}>
        <Carousel variant="white">
          <Carousel.Item>
            <img style={{ width: '100%' }}
              className="d-block w-100"
              src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y29kZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=700&q=60"
              alt="First slide"
            />
            <Carousel.Caption>
              <h5>First slide label</h5>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img style={{ width: '100%' }}
              className="d-block w-100"
              src="https://images.unsplash.com/photo-1564865878688-9a244444042a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Y29kZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=700&q=60"
              alt="Third slide"
            />
            <Carousel.Caption>
              <h5>Third slide label</h5>
              <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>

        <br />


        </Container>

    </div>
  )
}

export default Menu