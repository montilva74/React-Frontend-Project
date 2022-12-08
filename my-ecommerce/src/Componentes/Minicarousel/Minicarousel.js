import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import "./MiniCarousel.css"

function MinicarouselComponent () {
  return (
    <>
    <Container className='mini-height'>
            <Row className='carousel-c'>
                <Carousel>
                    <Carousel.Item>
                        <p className="d-block text-center"
                            src="./slides/banner_carrusel.jpg"
                            alt="First slide"><strong>ENVÍO GRATIS</strong> en compras superiores a $21000</p>
                    </Carousel.Item>
                    <Carousel.Item>
                    <p className="d-block text-center"
                            src="./slides/banner_carrusel.jpg"
                            alt="First slide"><strong>3 y 6 cuotas sin intereses</strong> con VISA, MASTERCARD y AMEX</p>
                    </Carousel.Item>
                </Carousel>
            </Row>
        </Container>
        </>
  )
}
 export default MinicarouselComponent;