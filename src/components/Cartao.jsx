import React from 'react'
import { Card, Col, Container } from 'react-bootstrap'

const Cartao = (props) => {
  return (

    <Container className="mb-100">
        <Col>
          <Card className="mb-5" border="primary" style={{ width: '18rem' }}>
            <Card.Img variant="top" src={props.foto} height="300px"/>
            <Card.Body>
              <Card.Title>{props.nome}</Card.Title>
              <Card.Text>{props.children}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
    </Container>
    
  )
}

export default Cartao