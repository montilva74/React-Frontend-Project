import React from 'react'
import { useParams } from 'react-router-dom'
import Banner from '../Banner/Banner';
import TitleCategory from '../TitleCatergory/TitleCategory';

export default function Category() {
    const { category } = useParams();

    const catImages = { "hombres": "DC_HOMBRES_3.jpg",
                        "mujeres": "DC_MUJER_2.jpg",
                        "ninos":   "DC_NIN_OS_1.jpg" }

    return (

        <div>
            <TitleCategory name={category}></TitleCategory>
            <Banner imagen={`../../catimages/${ catImages[category] }`}></Banner>
        </div>
    )
}
