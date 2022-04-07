import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Card, Button, Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Carrossel from '../../components/Carrossel'
import apiFilmes from '../../services/apiFilmes'

const FilmesPopulares = () => {

const [filmes, setFilmes] = useState([])

useEffect(()=>{
    
    const promessa = apiFilmes.get('movie/popular?language=pt-BR')

    promessa.then(resultado=>{

        setFilmes(resultado.data.results)
    })


}, [])


  return (
    <div>
      
        <h1>
            Filmes Populares
        </h1>
        <Row xs={1} md={2} xl={3} className="g-4">
          {filmes.map(item => (
            <Col>
              <Card style={{ width: '340px' }}>
                <Card.Img variant="top" src={"https://image.tmdb.org/t/p/w500/"+item.poster_path}/>
                <Card.Body>
                  <Card.Title>{item.title}</Card.Title>
                  <Card.Text>
                  ({item.overview})
                  </Card.Text>
                  
                  <Link className="btn btn-danger" to={"/filmes/" + item.id}>Ver detalhes</Link>

                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
    </div>
  )
}

export default FilmesPopulares