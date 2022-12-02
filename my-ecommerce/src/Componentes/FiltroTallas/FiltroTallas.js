import React from 'react'
import "./FiltroTallas.css"

const FiltroTallas = ({tallas, setFiltroTalla}) => {
  return (
    <>
        <div>
            Tallas
        </div>
        <div className='lista_tallas'>
            { tallas.map( t =>
                <div className='talla' key={t} onClick={ () => setFiltroTalla(t)}> {t} </div>
            )}
        </div>
    </>
  )
}

export default FiltroTallas
