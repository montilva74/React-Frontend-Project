import { Button } from 'bootstrap';
import PropTypes from 'prop-types';
export function Boton ({texto}){
    return <button>
        {texto}
    </button>
}
Boton.propTtype ={
    texto:PropTypes.string.isRequired
}

