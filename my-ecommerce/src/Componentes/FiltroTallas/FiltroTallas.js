import React from 'react'
import "./FiltroTallas.css"

const FiltroTallas = ({tallas, filtroTalla, setFiltroTalla}) => {
  return (
    <>
        <div className='tallas-title'>
          <p>Filtrar por</p>
            <span>Tallas</span>
        </div>
        <div className='lista_tallas'>
            { tallas.map( t =>
                <div className={ t === filtroTalla ? "talla talla-selec" : "talla"}
                    key={t} onClick={ () => setFiltroTalla(t)}> {t} </div>
            )}
        </div>
    </>
  )
}

export default FiltroTallas
