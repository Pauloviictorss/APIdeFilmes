import React, { useEffect, useState } from 'react'
import { Carousel, Container } from 'react-bootstrap'
import apiFilmes from '../services/apiFilmes'

const Carrossel = () => {
    const [filmes, setFilmes] = useState([])

    useEffect(()=>{
        
        const promessa = apiFilmes.get('movie/popular?language=pt-BR')
    
        promessa.then(resultado=>{
    
            setFilmes(resultado.data.results)
        })
    
    
    }, [])



  return (
    <Container className="justify-content-center" style={{  }}>
        {filmes.map(item => (
          <Carousel variant="white">
            <Carousel.Item>
              <img style={{ width: '100%' }}
                className="d-block w-100"
                src={"https://image.tmdb.org/t/p/w500/"+item.backdrop_path}
                alt="Third slide"
              />
              <Carousel.Caption>
                {item.title} ({item.overview})
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img style={{ width: '100%' }}
                className="d-block w-100"
                src={"https://image.tmdb.org/t/p/w500/"+item.backdrop_path}
                alt="Third slide"
              />
              <Carousel.Caption>
                {item.title} ({item.overview})
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        ))}

        <br />

        </Container>
  )
}

export default Carrossel