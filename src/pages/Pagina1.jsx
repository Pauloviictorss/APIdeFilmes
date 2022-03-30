import React from 'react'
import { Container } from 'react-bootstrap'
import Cartao from '../components/Cartao'

const Pagina1 = () => {
  return (

    <Container>
        <Cartao 
            
        nome="San Francisco" 
        foto="https://media.istockphoto.com/photos/birmingham-uk-from-above-picture-id1304547599?b=1&k=20&m=1304547599&s=170667a&w=0&h=BwJAyl4D8iCbVrEh_NqGpbA8MkOBoQ7DYyvSDN4pvf4=">
        <p>
        São Francisco, oficialmente Cidade e Condado de São Francisco (em inglês: City and County of San Francisco), é a quarta cidade mais populosa do estado da Califórnia e a 17ª mais populosa dos Estados Unidos, com uma população de mais de 873 mil habitantes, segundo o censo nacional de 2020.
        </p>
    </Cartao>

    <Cartao 
        nome="Toronto" foto="https://media.istockphoto.com/photos/top-view-of-central-district-in-hong-kong-china-at-night-picture-id1289488199?b=1&k=20&m=1289488199&s=170667a&w=0&h=Hd3Xbu_pBcibwIuudraUtpWhKGVQVE5EEGsaQOXNFgo=">
        <p>
        Toronto é a maior cidade e maior centro financeiro do Canadá, além de ser a capital da província canadense de Ontário. Com uma população estimada de 2.731.571 de habitantes em 2016, é a quarta cidade mais populosa da América do Norte depois da Cidade do México, Nova York e Los Angeles.
        </p>
    </Cartao>
    <Cartao
    nome="Tokyo" foto="https://images.unsplash.com/photo-1542902093-d55926049754?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bmlnaHQlMjBjaXR5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=700&q=60">
    <p>
        Tóquio é a capital e maior cidade do Japão. A área dessa metrópole é  amais populosa do mundo, com uma estimativa de 37.468 milhões de residentes em 2018.
    </p>
    </Cartao>   
  </Container>

    )
}

export default Pagina1