import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "../Componentes/Register/Register";
import Login from '../Componentes/Login/Login';
import Resetpassword from "../Componentes/Resetpassword/Resetpassword";
import Home from "../Componentes/Home/Home";
import Category from "../Componentes/Category/Category";

const Router = ( {children} ) => {

    const Vista1 = () => <h1>Galeria de Imagenes de Mi Emprendimiento</h1>;

    return (
        <>
        <BrowserRouter>

            { children }

            <Routes>

                <Route path="/"         element={<Home />} />
                <Route path="/gallery"  element={<Vista1 />} />
                <Route path="/login"    element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/resetpassword" element={<Resetpassword/>} />
                <Route path="/categories/:category" element={<Category />} />
                <Route path="/categories/:category/:tipo" element={<Category />} />
            </Routes>

        </BrowserRouter>
        </>
    );
};

export default Router;