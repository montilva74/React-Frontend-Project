import PropTypes from 'prop-types';

export function Boton ({texto}){
    return <button class="btn btn-info">
        {texto}
    </button>
}
Boton.propTtype ={
    texto:PropTypes.string.isRequired
}

