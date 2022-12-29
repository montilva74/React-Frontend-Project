import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom'
import Banner from '../Banner/Banner';
import TitleCategory from '../TitleCatergory/TitleCategory';
import ProductItem from '../ProductItem/ProductItem';
import productos from "./../../Api/products.json";
import Ordenar from '../Ordenar/Ordenar';
import FiltroTallas from '../FiltroTallas/FiltroTallas';
//import Detail from '..Details/Details.js'


//Aqui se organizan los componentes relacionados con las categorias, para armar la vista categorias.
export default function Category() {
    const { category, tipo } = useParams();

    const catImages = {
        "hombres": "DC_HOMBRES_3.jpg",
        "mujeres": "DC_MUJER_2.jpg",
        "niños": "DC_NIN_OS_1.jpg"
    }

    // Creamos la variable de Estado que va a guardar la eleccion del usuario
    const [ordenarPor, setOrdenarPor] = useState()

    const [filtroTalla, setFiltroTalla] = useState()
    const [tallas, setTallas] = useState([])

    // Funcion para filtrar por Categoria y Tipo
    const filtroCategoriaTipo = (p) => {
        if (!tipo) {
            return p.category === category
        } else {
            return p.category === category && p.tipo === tipo
        }
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

        const tallasDeProductos = productos.filter(p => filtroCategoriaTipo(p)).map(item => item.sizes)
        const todasLasTallas = tallasDeProductos.flat(1).sort()
        setTallas([...new Set(todasLasTallas)])

        return () => true

    }, [])

    return (

        <div>
            <TitleCategory name={category}></TitleCategory>
            <Banner imagen={`../../catimages/${catImages[category]}`}></Banner>

            <Container>
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
                                        .filter(p => filtroCategoriaTipo(p))
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
                            </Container>
                        </div>
                    </Col>
                </Row>
            </Container>

        </div>
    )
}
