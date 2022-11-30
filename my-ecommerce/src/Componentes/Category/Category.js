import React from 'react'
import { useParams } from 'react-router-dom'
import Banner from '../Banner/Banner';
import TitleCategory from '../TitleCatergory/TitleCategory';


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
        </div>
    )
}
