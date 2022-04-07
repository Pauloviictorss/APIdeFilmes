import React, { useEffect, useState } from 'react'
import { Carousel, Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import apiFilmes from '../services/apiFilmes'




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
            <Link className="nav-link" to="/contador">Contador</Link>
            <Link className="nav-link" to="/filmespopulares">Filmes Populares</Link>
            <Link className="nav-link" to="/filmesdetalhes">Detalhes Cinematográficos</Link>
            <Link className="nav-link" to="/filmeslancamento">Lançamentos</Link>

          </Nav>
          </Container>
        </Navbar>

        <br />

    </div>
  )
}

export default Menu