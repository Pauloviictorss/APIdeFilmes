import React, { useEffect, useState } from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'




const Menu = () => {


  return (
    <div>
      

        <Navbar bg="dark" variant="dark">
          <Container>
          <Navbar.Brand href="/filmeslancamento">VictFlix</Navbar.Brand>
          <Nav className="me-auto">

            <Link className="mx-2 nav-link btn btn-danger text-light" to="/filmespopulares">Filmes Populares</Link>
            <Link className="mx-2 nav-link btn btn-danger text-light" to="/filmeslancamento">Lançamentos</Link>
            <Link className="mx-2 nav-link btn btn-danger text-light" to="/filmescartaz">Em cartaz</Link>

          </Nav>
          </Container>
        </Navbar>

        <br />

    </div>
  )
}

export default Menu