import React, { useEffect, useState } from 'react'
import { Button, Card, Col, Row } from 'react-bootstrap'
import { Link, useParams } from 'react-router-dom'
import apiFilmes from '../../services/apiFilmes'

const FilmesDetalhes = () => {

    
    const [ator, setAtor] = useState({})
    
    useEffect(()=>{
    
        const promessa = apiFilmes.get('movie/' + params.id + 'credits?language=pt-BR')
        
        promessa.then(resultado=>{
            console.log(resultado.data);
            setAtor(resultado.data);
        })
    
    }, [])

    useEffect(()=>{
    
      const promessa = apiFilmes.get('person/' + params.id + '?language=pt-BR')
      
      promessa.then(resultado=>{
          console.log(resultado.data);
          setAtor(resultado.data)
          
      })
  
  }, [])
    


    const params = useParams()

    return (
    <div>
        {!ator.id && <h1>Carregando...</h1>}

        {ator.id && 
        <Row xs={1} sm={1} md={1} lg={2} xl={2} className="g-4">
            <Col>
                <Card border="light" style={{ width: '25rem' }}>
                    <Card className="bg-dark mb-2" style={{ width: '25rem' }}>
                        <Card.Body>
                            <Card className="p-2 mb-2 btn text-dark bg-light">
                                <h1>{ator.name}</h1>
                            </Card>
                            <Card.Img variant="top" src={"https://image.tmdb.org/t/p/w500/" + ator.profile_path}
                            />
                            
                            
                        </Card.Body>
                    </Card>
                </Card>
            </Col>


            <Col>
            <Card border="light" style={{ width: '25rem' }}>
                <Card className="bg-dark text-light" style={{ width: '25rem' }}>
                    <Card.Body>
                        <Card border="light" className="bg-dark">
                            <Card.Title className="btn btn-light">
                                Biografia:
                            </Card.Title>
                            <p className="p-2">{ator.biography}</p>
                            {ator.biography === '' && <p style={{margin: 'auto', marginBottom: '10px'}}>Sem dados de biografia.</p>}
                        </Card>

                        <Row xs={1} md={2} xl={2}>
                            <Col>
                                <Card border="light" className="bg-dark mt-4 align-items-center">
                                    <Card.Title className="btn btn-light">
                                        Data de Nascimento:
                                    </Card.Title>
                                    <p className="p-2">{ator.birthday}</p>
                                </Card>
                            </Col>
                            <Col>
                                <Card border="light" className="bg-dark mt-4 align-items-center">
                                    <Card.Title style={{width: '100%'}} className="btn btn-light">
                                        Nascido em:
                                    </Card.Title>
                                    <p className="p-2">{ator.place_of_birth}</p>
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
      
        </Row>  
        }      
    </div>
  )
}

export default FilmesDetalhes