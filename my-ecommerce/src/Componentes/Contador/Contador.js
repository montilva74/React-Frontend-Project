import React,{useState} from "react"
import "./Contador.css"

export default function Contador (){
const[Contador,setContador]=useState(0);

const incrementar = (evento) => {
    evento.preventDefault();
    setContador(Contador + parseInt(incrementar));
};
const disminuir = (evento) => {
    evento.preventDefault();
    setContador(Contador - parseInt(incrementar));
};
const onChange = (evento) => {
    const value = evento.target.value;
    setIncremento(value);
  };
    return(
            <div className="">
            <button className="bi bi-bag-plus-fill" onClick={incrementar}></button>
            <input type="number" onChange={onChange}value={incrementar}/>
            <p>{Contador}</p>
            <button className="bi bi-bag-dash-fill" onClick={disminuir}></button>
            </div>
        );
}