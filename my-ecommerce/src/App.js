import Login from "./Componentes/Login/Login";
import Register from "./Componentes/Register/Register";
import Router from './Routes/Router'
import Navbar from './Componentes/Navbar/Navbar'
//import { useUser } from "reactfire";



function App() {
  return (
    <>
    { /*
          <Login />
          <Register/>
    */ }

    <Router>

      <Navbar></Navbar>

    </Router>

    
    </>
  );
}

export default App;
