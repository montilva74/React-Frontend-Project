import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom'
import Banner from '../Banner/Banner';
import TitleCategory from '../TitleCatergory/TitleCategory';
import ProductItem from '../ProductItem/ProductItem';
import productos from "./../../Api/products.json";


//Aqui se organizan los componentes relacionados con las categorias, para armar la vista categorias.
export default function Category() {
    const { category } = useParams();

    const catImages = { "hombres": "DC_HOMBRES_3.jpg",
                        "mujeres": "DC_MUJER_2.jpg",
                        "niños":   "DC_NIN_OS_1.jpg" }

    return (

        <div>
            <TitleCategory name={category}></TitleCategory>
            <Banner imagen={`../../catimages/${ catImages[category] }`}></Banner>

            <Container>
                <Row className="justify-content-md-center">
                    <Col xs lg="2">
                        Filtros
                    </Col>
                    <Col xs lg="10">
                        <div>
                            Componente de Ordenar
                        </div>
                        <div>
                            <Container>
                                <Row>

                                { productos.map( item =>
                                

                                <Col xs lg="3" key="1">
                                    <ProductItem
                                        img={item.image}
                                        name={item.nombre}
                                        precio={item.price}
                                    ></ProductItem>
                                </Col>
                                
                                ) }

                                </Row>
                            </Container>
                        </div>
                    </Col>
                </Row>
            </Container>

        </div>
    )
}
