import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import apiFilmes from '../../services/apiFilmes'

const SeriesLancamento = () => {

const [series, setSeries] = useState([])

useEffect(()=>{
    
    const promessa = apiFilmes.get('tv/on_the_air?language=pt-BR')

    promessa.then(result=>{
        console.log(result.data)
        setSeries(result.data.results)
    })


}, [])


  return (
    <div>
      
      {!series.length && <h1>Carregando...</h1>}
      <Card className="p-3 mb-5 align-items-center bg-dark btn text-light" style={{ alignItems: 'auto'}}>
        <h1>
            Séries no Ar
        </h1>      
      </Card>
        
        <Row xs={1} md={2} xl={3} className="g-4">
          {series.map(item => (
            <Col key={item.id}>
              <Card style={{ width: '340px', height: '768px' }}>
                <Card.Img variant="top" src={"https://image.tmdb.org/t/p/w500/"+item.poster_path}/>
                <Card.Body>
                  <Card.Title><h4>{item.title}</h4></Card.Title>
                  <Card.Text>
                  {item.overview.substring(0,150) + "..."}
                  </Card.Text>
                </Card.Body>

                <Card style={{ width: '340px', alignItems: 'auto'}}><Link style={{ width: '340px'}} className="mb-0 btn btn-danger" to={"/series/" + item.id}>Ver detalhes</Link>
                </Card>
              </Card>
            </Col>
          ))}
        </Row>
    </div>
  )
}

export default SeriesLancamento