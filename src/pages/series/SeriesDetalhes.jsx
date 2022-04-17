import React, { useEffect, useState } from 'react'
import { Button, Card, Col, Row } from 'react-bootstrap'
import { Link, useParams } from 'react-router-dom'
import apiFilmes from '../../services/apiFilmes'

const SeriesDetalhes = () => {

    const [serie, setSerie] = useState({})
    const [seasons, setSeasons] = useState([])

    useEffect(()=>{
    
        const promessa = apiFilmes.get('tv/' + params.id + '?language=pt-BR')
        
        promessa.then(resultado=>{
            console.log(resultado.data.seasons);
            setSerie(resultado.data);
        })
    
    }, [])

    useEffect(()=>{
    
        const promessa = apiFilmes.get('tv/' + params.id + '?language=pt-BR')
        
        promessa.then(resultado=>{
            console.log(resultado.data.seasons);
            setSeasons(resultado.data.seasons);
        })
    
    }, [])


    const params = useParams()

    return (
    <div>
        {!serie.id && <h1>Carregando...</h1>}

        {serie.id && 
        <Row xs={1} sm={1} md={1} lg={2} xl={2} className="g-4">
            <Col>
                <Card border="light" style={{ width: '25rem' }}>
                    <Card className="bg-dark mb-2" style={{ width: '25rem' }}>
                        <Card.Body>
                            <Card className="p-2 mb-2 btn text-dark bg-light">
                                <h1>{serie.title}</h1>
                            </Card>
                            <Card.Img className="mb-2 mt-3" variant="top" src={"https://image.tmdb.org/t/p/w500/"+serie.poster_path}/>
                            
                        </Card.Body>
                    </Card>
                    <Card className="p-2 btn btn-light text-light bg-danger">
                        <Button variant='danger' target="_blank" href={serie.homepage}><h5>Site Oficial</h5></Button>
                    </Card>
                </Card>
            </Col>


            <Col>
            <Card border="light" style={{ width: '25rem' }}>
                <Card className="bg-dark text-light" style={{ width: '25rem' }}>
                    <Card.Body>

                        <Card.Img className="mb-4 mt-2" variant="top" src={"https://image.tmdb.org/t/p/w500/"+serie.backdrop_path}/>
                        <Card border="light" className="bg-dark">
                            <Card.Title className="btn btn-light">
                                Sinopse:
                            </Card.Title>
                            <p className="p-2">{serie.overview}</p>
                        </Card>

                        <Row xs={1} md={2} xl={2}>
                            <Col>
                                <Card border="light" className="bg-dark mt-4 align-items-center">
                                    <Card.Title style={{width: '100%'}} className="btn btn-light">
                                        Data de lançamento:
                                    </Card.Title>
                                    <p className="p-2">{serie.first_air_date}</p>
                                </Card>
                            </Col>
                            <Col>
                                <Card border="light" className="bg-dark mt-4 align-items-center">
                                    <Card.Title style={{width: '100%'}} className="btn btn-light">
                                        Nota de avaliação média:
                                    </Card.Title>
                                    <p className="p-2">{serie.vote_average}</p>
                                </Card>
                            </Col>
                            <Col style={{width: '100%'}}>
                                <Card border="light" className="bg-dark mt-4 align-items-center">
                                    <Card.Title className="btn btn-light w-100">
                                        Gêneros:
                                    </Card.Title>
                                    {serie.genres.map(item => (
                                    <p className="px-2 text-light">{item.name}</p>    
                                    ))}
                                </Card>
                            </Col>
                            <Col>
                                <Card border="light" className="bg-dark mt-4 align-items-center">
                                    <Card.Title style={{width: '100%'}} className="btn btn-light">
                                        Número de Episódios:
                                    </Card.Title>
                                    <p className="p-2">{serie.number_of_episodes}</p>
                                </Card>
                            </Col>
                            <Col>
                                <Card border="light" className="bg-dark mt-4 align-items-center">
                                    <Card.Title style={{width: '100%'}} className="btn btn-light">
                                        Quantidade de Temporadas:
                                    </Card.Title>
                                    <p className="p-2">{serie.number_of_seasons}</p>
                                </Card>
                            </Col>
                            <Col>

                            </Col>
                            
                        </Row>


                    </Card.Body>
                </Card>

                <Card className="mt-2">
                    <Link className="btn btn-danger" to={-1}>Voltar</Link>
                </Card>
                
                </Card>
            </Col>
            

            <Row style={{width: '100%', marginLeft: 'auto', marginRight: 'auto'}} className="g-4">
                <Col md={12}>
                    <Card>
                        <Card className="p-2 mx-2 my-2 btn text-dark bg-light">
                            <h1>Seasons</h1>
                        </Card>
                            <div>                                
                                <Row xs={1} md={2} xl={3} className="g-4">
                                {seasons.map(item => (
                                    <Col key={item.id}>
                                    <Card style={{ width: '340px', height: '700px' }}>
                                        <Card.Img variant="top" src={"https://image.tmdb.org/t/p/w500/"+item.poster_path}/>
                                        <Card.Body>
                                        <Card.Title><h4>{item.name}</h4></Card.Title>
                                        <p>{item.overview.substring(0,100) + "..."}</p>
                                        <h5>Data de Lançamento: {item.air_date}</h5>
                                        </Card.Body>
                                    </Card>
                                    </Col>
                                ))}
                                </Row>
                            </div>
                    </Card>

                    

                </Col>
            </Row>




        </Row>  
        
        }  
    
    </div>
  )
}

export default SeriesDetalhes