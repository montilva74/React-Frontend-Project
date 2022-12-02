import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import './Banner.css'

function Banner({imagen, href = "#"}) {
    return (
      <Container className='banner_home'>
        <Row>
          <Col>
            <a href={href}>
                <img src={imagen} alt='banner'></img>
            </a>
          </Col>
        </Row>
      </Container>
    );
}

export default Banner;