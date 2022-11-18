import React, { useState} from 'react';
// import logo from './logo.svg';
// import './App.css';
//import Navbar from "./Componentes/Navbar/Navbar";
import Footer from './Componentes/Footer/Footer.js'
import Modal from "./Componentes/Modal/Modal.js";

function App() {
  const [active, setActive] = useState(false);

  const toggle = () => {
    setActive(!active);
  }
  return (

    /*<Navbar title="Store Fashion Clothes" />*/
    <div className='App'>
      
      <Footer/>
      <Modal active={active} toggle={toggle}>
        <h1>Hola</h1>
      </Modal>
    </div>
  );
}

export default App;
