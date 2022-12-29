import React, { useCallback, useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom'
import ProductItem from '../ProductItem/ProductItem';
import productos from "./../../Api/products.json";
import Ordenar from '../Ordenar/Ordenar';
import FiltroTallas from '../FiltroTallas/FiltroTallas';

//Aqui se organizan los componentes relacionados con las categorias, para armar la vista categorias.
export default function Search() {

    const { frase } = useParams();

    // Creamos la variable de Estado que va a guardar la eleccion del usuario
    const [ordenarPor, setOrdenarPor] = useState()

    const [filtroTalla, setFiltroTalla] = useState()
    const [tallas, setTallas] = useState([])

    // Funcion para filtrar por Frase
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const filtroBuscador = useCallback((p) => {
        return  p.nombre.toLowerCase().indexOf( frase.toLowerCase() ) >= 0 ||
                p.tipo.toLowerCase().indexOf( frase.toLowerCase() ) >= 0
    })

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

        const tallasDeProductos = productos.filter(p => filtroBuscador(p)).map(item => item.sizes)

        const todasLasTallas = tallasDeProductos.flat(1).sort()
        setTallas([...new Set(todasLasTallas)])

        return () => true

    }, [filtroBuscador])

    return (

        <div>
            <Container className='mt-4'>
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
                                        .filter(p => filtroBuscador(p))
                                        .filter(p => filtroPorTalla(p))
                                        .sort((a, b) => ordenarProductos(a, b))
                                        .map(item =>
                                            <Col xs="3" key={item.id}>
                                                <ProductItem
                                                    id={item.id}
                                                    img={item.image}
                                                    name={item.nombre}
                                                    precio={item.price}
                                                ></ProductItem>
                                            </Col>
                                        )
                                    }
                                </Row>
                                <Row>
                                    { productos
                                        .filter(p => filtroBuscador(p))
                                        .filter(p => filtroPorTalla(p))
                                        .sort((a, b) => ordenarProductos(a, b)).length === 0 &&
                                        <Col className='mt-5'>
                                            <h5>Lo sentimos mucho, no se encontraron productos con esa palabra clave.</h5>
                                            <ul>
                                                <li>Revisa la ortografía de la palabra.</li>
                                                <li>Utiliza palabras más genéricas o menos palabras.</li>
                                                <li>Navega por las categorías para encontrar un producto similar</li>
                                            </ul>
                                        </Col>
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
