import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "../Componentes/Register/Register";
import Login from '../Componentes/Login/Login'
import Resetpassword from "../Componentes/Resetpassword/Resetpassword";
import { Favoritos } from "../Componentes/Favoritos/Favoritos";

const Router = ( {children} ) => {

    const Home = () => <h1 className="mt-3">Está página está en construccion</h1>;
    const Vista1 = () => <h1>Galeria de Imagenes de Mi Emprendimiento</h1>;

    return (
        <>
        <BrowserRouter>

            { children }

            <Routes>

                <Route path="/"         element={<Favoritos />} />
                <Route path="/gallery"  element={<Vista1 />} />
                <Route path="/login"    element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/resetpassword" element={<Resetpassword/>} />
            </Routes>

        </BrowserRouter>
        </>
    );
};

export default Router;