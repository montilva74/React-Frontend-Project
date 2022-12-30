/* eslint-disable no-undef */
import React from 'react';
import './Carousel.css';
import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from "react-bootstrap/Col";
import { Link } from 'react-router-dom';


//Este componente es el carrusel que se muestra en la vista del home
function CarouselComponent() {

    return (
        <Container className="container_1 d-none d-sm-none d-md-block">
            <Row>
                <Col xs={12}>
                    <Carousel className="mt-3">
                        <Carousel.Item>
                            <Link to={"/categories/hombres"}>
                                <img
                                    className="d-block w-100"
                                    src="./slides/banner_carrusel.jpg"
                                    alt="First slide"
                                />
                            </Link>
                        </Carousel.Item>
                        <Carousel.Item>
                            <Link to={"/categories/mujeres"}>
                                <img
                                    className="d-block w-100"
                                    src="./slides/banner_carrusel1.jpg"
                                    alt="Second slide"
                                />
                            </Link>
                        </Carousel.Item>
                        <Carousel.Item>
                            <Link to={"/categories/hombres"}>
                                <img
                                    className="d-block w-100"
                                    src="./slides/banner_carrusel3.jpg"
                                    alt="Third slide"
                                />
                            </Link>
                        </Carousel.Item>
                    </Carousel>
                </Col>
            </Row>
        </Container>
    );
}

export default CarouselComponent;