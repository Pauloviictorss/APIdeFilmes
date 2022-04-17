import React, { useEffect, useState } from 'react'
import { Container, Dropdown, DropdownButton, InputGroup, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'




const Menu = () => {


  return (
    <div>
      

        <Navbar bg="dark" variant="dark">
          <Container>

          <Navbar.Brand className="btn btn-danger my-1" style={{height: '45px'}} href="/filmespopulares">VictFlix</Navbar.Brand>
          <Nav className="me-auto">

          
          <InputGroup className="mb-0 mx-2">
            <DropdownButton
              variant="outline-danger"
              title="Filmes"
              id="input-group-dropdown-1"
            >
              <Dropdown.Item className="bg-dark text-light" href="/filmespopulares">Filmes Populares</Dropdown.Item>
              <Dropdown.Item className="bg-dark text-light" href="/filmeslancamento">Lançamentos</Dropdown.Item>
              <Dropdown.Item className="bg-dark text-light" href="/filmescartaz">Filmes em Cartaz</Dropdown.Item>
            </DropdownButton>
          </InputGroup>


          <InputGroup className="mb-0 mx-2">
            <DropdownButton
              variant="outline-danger"
              title="Séries"
              id="input-group-dropdown-1"
            >
              <Dropdown.Item className="bg-dark text-light" href="/seriespopulares">Séries Populares</Dropdown.Item>
              <Dropdown.Item className="bg-dark text-light" href="/serieslancamento">Séries no Ar</Dropdown.Item>
              <Dropdown.Item className="bg-dark text-light" href="/seriescartaz">Transmissão Ao Vivo</Dropdown.Item>
            </DropdownButton>
          </InputGroup>
          



          </Nav>
          </Container>
        </Navbar>

        <br />

    </div>
  )
}

export default Menu