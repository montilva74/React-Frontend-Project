import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Saludo } from "./Componentes/Saludo/Saludo";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
// import Navbar from "./Componentes/Navbar/Navbar";
import { Boton } from "./Componentes/Boton";
// import 'bootstrap/dist/css/bootstrap.css';
// import 'bootstrap/dist/js/bootstrap.min.js'
// import Contador from './Componentes/Contador/contador';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div>
    <React.StrictMode>
      <App />
      <Saludo nombre="nombre" />
      <Boton texto="Comprar" carita=""/>
    </React.StrictMode>
  </div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
