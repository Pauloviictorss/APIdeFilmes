import React from 'react'
import { Card, Button, Container, Row, Col } from 'react-bootstrap'
import Pagina1 from './Pagina1'

const carros = [
{
  marca: 'VW', 
  modelo: 'Fusca', 
  cor:'Branco', 
  ano: 2022, 
  foto: 'https://fotos.jornaldocarro.estadao.com.br/uploads/2018/03/10131241/vw-fusca-1160x773.jpg'
},
{
  marca: 'VW', 
  modelo: 'Polo', 
  cor:'Prata', 
  ano: 2006, 
  foto: "https://images.noticiasautomotivas.com.br/img/f/volkswagen-polo-hatch-2007-2.jpg",
},
{
  marca: 'Hyundai', 
  modelo: 'IX35', 
  cor:'Preto', 
  ano: 2021, 
  foto: 'https://quatrorodas.abril.com.br/wp-content/uploads/2022/02/qr-690-ix35-x-compass-004.jpg?quality=70&strip=info'
},
{
  marca: 'Chevrolet', 
  modelo: 'Malibu', 
  cor:'Preto', 
  ano: 2008, 
  foto: 'https://hips.hearstapps.com/hmg-prod/amv-prod-cad-assets/images/08q4/267373/2008-chevrolet-malibu-ltz-photo-224054-s-original.jpg'
},
{
  marca: 'VW', 
  modelo: 'Golf', 
  cor:'Grafiti', 
  ano: 2012, 
  foto: 'https://www.litoralcar.com.br/foto-resize/g/912365/1935/volkswagen-golf-sportline-1.6-2012-12729363.jpg'
},
{
  marca: 'VW', 
  modelo: 'Fusca', 
  cor:'Branco', 
  ano: 2022, 
  foto: 'https://fotos.jornaldocarro.estadao.com.br/uploads/2018/03/10131241/vw-fusca-1160x773.jpg'
},
{
  marca: 'VW', 
  modelo: 'Polo', 
  cor:'Prata', 
  ano: 2006, 
  foto: "https://images.noticiasautomotivas.com.br/img/f/volkswagen-polo-hatch-2007-2.jpg",
},
{
  marca: 'Hyundai', 
  modelo: 'IX35', 
  cor:'Preto', 
  ano: 2021, 
  foto: 'https://quatrorodas.abril.com.br/wp-content/uploads/2022/02/qr-690-ix35-x-compass-004.jpg?quality=70&strip=info'
},
{
  marca: 'Chevrolet', 
  modelo: 'Malibu', 
  cor:'Preto', 
  ano: 2008, 
  foto: 'https://hips.hearstapps.com/hmg-prod/amv-prod-cad-assets/images/08q4/267373/2008-chevrolet-malibu-ltz-photo-224054-s-original.jpg'
},
{
  marca: 'VW', 
  modelo: 'Golf', 
  cor:'Grafiti', 
  ano: 2012, 
  foto: 'https://www.litoralcar.com.br/foto-resize/g/912365/1935/volkswagen-golf-sportline-1.6-2012-12729363.jpg'
},
{
  marca: 'Hyundai', 
  modelo: 'IX35', 
  cor:'Preto', 
  ano: 2021, 
  foto: 'https://quatrorodas.abril.com.br/wp-content/uploads/2022/02/qr-690-ix35-x-compass-004.jpg?quality=70&strip=info'
},
{
  marca: 'Chevrolet', 
  modelo: 'Malibu', 
  cor:'Preto', 
  ano: 2008, 
  foto: 'https://hips.hearstapps.com/hmg-prod/amv-prod-cad-assets/images/08q4/267373/2008-chevrolet-malibu-ltz-photo-224054-s-original.jpg'
}
]

const Objeto = () => {
  return (
    <Container>
      <div>
        <Pagina1/>

        <h1>Objeto</h1>
        <h3>Carros</h3>
        <Row>
        {
          carros.map(item => (

            <Col xs={3} >
              <Card>
                <Card.Img variant="top" src={item.foto} />
                <Card.Body>
                  <Card.Title>{item.marca + " - " + item.modelo}</Card.Title>
                  <Card.Text>
                    <strong>Cor: </strong> {item.cor} 
                  </Card.Text>
                  <Card.Text>
                    <strong>Ano: </strong> {item.ano}
                  </Card.Text>
                  <Button variant="danger">Mais detalhes</Button>
                </Card.Body>
              </Card>
            </Col>
        ))  
        }
        </Row>
     
   
    </div>
    </Container>
  )
}

export default Objeto