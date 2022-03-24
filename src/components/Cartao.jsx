import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'

const Cartao = (props) => {
  return (

    <Container>
        <Col>
    <Card className="my-10" border="primary" style={{ width: '18rem' }}>
      <Card.Img variant="top" src={props.foto} height="300px"/>
      <Card.Body>
        <Card.Title>{props.nome}</Card.Title>
        <Card.Text>{props.content}</Card.Text>
      </Card.Body>
    </Card>
    </Col>
    </Container>
  )
}

export default Cartao