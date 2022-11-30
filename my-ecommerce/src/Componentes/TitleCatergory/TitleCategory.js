import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./TitleCategory.css"

export default function Title_Category({name}) {
  return (
    <Container>
        <Row>
            <Col>
                <h1>
                    <span className='capitalize'>{name}</span>
                </h1>
            </Col>
        </Row>
    </Container>
  )
}
