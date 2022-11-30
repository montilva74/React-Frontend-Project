/* eslint-disable no-undef */
import React from 'react';
import './Carousel.css';
import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';


//Este componente es el carrusel que se muestra en la vista del home
function CarouselComponent() {

    return (
        <Container className='container_1'>
            <Row>
                <Carousel className='mt-3'>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="./slides/banner_carrusel.jpg"
                            alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="./slides/banner_carrusel1.jpg"
                            alt="Second slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="./slides/banner_carrusel3.jpg"
                            alt="Third slide"
                        />
                    </Carousel.Item>
                </Carousel>
            </Row>
        </Container>
    );
}

export default CarouselComponent;