import React from "react";
import MinicarouselComponent from "../Minicarousel/Minicarousel";
import CarouselComponent from "./../Carousel/Carousel";
import Cards from "./../Cards/Cards";
import Video from './../Video/Video';
import Cardsbottom from "../Cardsbottom/Cardsbottom";
import Banner from "../Banner/Banner";

const Home = () => {
  return (
    <>
      <MinicarouselComponent></MinicarouselComponent>
      <CarouselComponent></CarouselComponent>
      <Cards></Cards>
      <Video></Video>
      <Cardsbottom></Cardsbottom>
      <Banner imagen="Banner/DC-WARHOL-WEB-1920X850.jpg" href="/categories/hombres"></Banner>
    </>
  );
};

export default Home;
