import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./TitleCategory.css"

//Este componente muestra el título dependiendo de la categoria a la que se ingrese
export default function Title_Category({name}) {
  return (
    <Container>
        <Row>
            <Col>
                <h1 className='capitalize'>
                    <span>{name}</span>
                </h1>
            </Col>
        </Row>
    </Container>
  )
}
