import React from "react";
import MinicarouselComponent from "../Minicarousel/Minicarousel";
import CarouselComponent from "./../Carousel/Carousel";
import Cards from "./../Cards/Cards";
import Video from './../Video/Video';
import Cardsbottom from "../Cardsbottom/Cardsbottom";
import Banner from "../Banner/Banner";
import { Container, Row, Col } from "react-bootstrap"

const Home = () => {

  return (
    <Container>
      <Row>
        <Col xs={12}>
          <MinicarouselComponent></MinicarouselComponent>
        </Col>
        <Col xs={12}>
          <CarouselComponent></CarouselComponent>
        </Col>
        <Col xs={12}>
          <Cards></Cards>
        </Col>
        <Col xs={12}>
          <Video></Video>
        </Col>
        <Col xs={12}>
          <Cardsbottom></Cardsbottom>
        </Col>
        <Col xs={12}>
          <Banner imagen="Banner/DC-WARHOL-WEB-1920X850.jpg" href="/categories/hombres"></Banner>
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
