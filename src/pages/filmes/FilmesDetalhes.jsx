import React, { useEffect, useState } from 'react'
import { Button, Card, Col, Row } from 'react-bootstrap'
import { Link, useParams } from 'react-router-dom'
import apiFilmes from '../../services/apiFilmes'

const FilmesDetalhes = () => {

    const [filme, setFilme] = useState({})

    useEffect(()=>{
    
        const promessa = apiFilmes.get('movie/' + params.id + '?language=pt-BR')
        


        promessa.then(resultado=>{
            console.log(resultado.data);
            setFilme(resultado.data);
        })
    
    
    }, [])


    const params = useParams()

    return (
    <div>
        <Row xs={1} sm={1} md={1} lg={2} xl={2} className="g-4">
            <Col>
                <Card border="light" style={{ width: '25rem' }}>
                    <Card className="bg-dark mb-2" style={{ width: '25rem' }}>
                        <Card.Body>
                            <Card className="p-2 mb-2 btn text-dark bg-light">
                                <h1>{filme.title}</h1>
                            </Card>
                            <Card.Img className="mb-2 mt-3" variant="top" src={"https://image.tmdb.org/t/p/w500/"+filme.poster_path}/>
                            
                        </Card.Body>
                    </Card>
                    <Card className="p-2 btn btn-light text-light bg-danger">
                        <Button variant='danger' target="_blank" href={filme.homepage}><h5>Site Oficial</h5></Button>
                    </Card>
                </Card>
            </Col>


            <Col>
            <Card border="light" style={{ width: '25rem' }}>
                <Card className="bg-dark text-light" style={{ width: '25rem' }}>
                    <Card.Body>

                        <Card.Img className="mb-4 mt-2" variant="top" src={"https://image.tmdb.org/t/p/w500/"+filme.backdrop_path}/>
                        <Card border="light" className="bg-dark">
                            <Card.Title className="btn btn-light">
                                Sinopse:
                            </Card.Title>
                            <p className="p-2">{filme.overview}</p>
                        </Card>

                        <Row xs={1} md={2} xl={2}>
                            <Col>
                                <Card border="light" className="bg-dark mt-4">
                                    <Card.Title className="btn btn-light">
                                        Data de lançamento:
                                    </Card.Title>
                                    <p className="p-2">{filme.release_date}</p>
                                </Card>
                            </Col>
                            <Col>
                                <Card border="light" className="bg-dark mt-4">
                                    <Card.Title className="btn btn-light">
                                        Nota de avaliação média:
                                    </Card.Title>
                                    <p className="p-2">{filme.vote_average}</p>
                                </Card>
                            </Col>
                        </Row>


                    </Card.Body>
                </Card>

                <Card className="mt-2">
                    <Link className="btn btn-danger" to={"../filmespopulares"}>Voltar para a página principal</Link>
                </Card>

                </Card>
            </Col>
        </Row>        
    </div>
  )
}

export default FilmesDetalhes