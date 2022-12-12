import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import Banner from '../Banner/Banner';
import TitleCategory from '../TitleCatergory/TitleCategory';
import ProductItem from '../ProductItem/ProductItem';
import productos from "../../Api/products.json";
import Ordenar from '../Ordenar/Ordenar';
import FiltroTallas from '../FiltroTallas/FiltroTallas';


//Aqui se organizan los componentes relacionados con las categorias, para armar la vista categorias.
export default function Descuentos() {
    
    // Creamos la variable de Estado que va a guardar la eleccion del usuario
    const [ordenarPor, setOrdenarPor] = useState()

    const [filtroTalla, setFiltroTalla] = useState()
    const [tallas, setTallas] = useState([])

    // Funcion para filtrar por Categoria y Tipo
    const filtroDescuentos = (p) => {
        return p.descuento !== null && p.descuento !== undefined
    }

    const filtroPorTalla = (p) => {
        if (filtroTalla) {
            return p.sizes.includes(filtroTalla)
        } else {
            return true
        }
    }

    // Funcion para ordenar productos
    const ordenarProductos = (a, b) => {
        if (ordenarPor === "precio") {
            return a.price - b.price;
        }
        else if (ordenarPor === "nombre") {
            if (a.nombre > b.nombre) return 1;
            if (b.nombre > a.nombre) return -1;
            return 0;
        }
    }

    useEffect(() => {

        const tallasDeProductos = productos.filter(p => filtroDescuentos(p)).map(item => item.sizes)
        const todasLasTallas = tallasDeProductos.flat(1).sort()
        setTallas([...new Set(todasLasTallas)])

        return () => true

    }, [])

    return (

        <div>
            <TitleCategory name="Descuentos"></TitleCategory>
            <Banner imagen={"./../../../public/catimages/DC_DESCUENTOS_1.jpg"}></Banner>

            <Container className='vh75'>
                <Row className="justify-content-md-center">
                    <Col xs="2">
                        <FiltroTallas tallas={tallas} setFiltroTalla={setFiltroTalla}></FiltroTallas>
                    </Col>
                    <Col xs="10">
                        <div>
                            <Ordenar setOrdenarPor={setOrdenarPor}></Ordenar>
                        </div>
                        <div>
                            <Container>
                                <Row>
                                    {productos
                                        .filter(p => filtroDescuentos(p))
                                        .filter(p => filtroPorTalla(p))
                                        .sort((a, b) => ordenarProductos(a, b))
                                        .map(item =>
                                            <Col xs="3" key={item.id}>
                                                <ProductItem
                                                    img={item.image}
                                                    name={item.nombre}
                                                    precio={item.price}
                                                    descuento={item.descuento}
                                                ></ProductItem>
                                            </Col>
                                        )
                                    }
                                </Row>
                            </Container>
                        </div>
                    </Col>
                </Row>
            </Container>

        </div>
    )
}
