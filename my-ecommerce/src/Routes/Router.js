import { BrowserRouter, Routes, Route } from "react-router-dom";
const Router = () => {
 const Home = () => <h1>Home</h1>;
 const Vista1 = () => <h1>Vista1</h1>;
 const Vista2 = () => <h1>Vista2</h1>;
 const Vista3 = () => <h1>Vista3</h1>;
 const Vista4 = () => <h1>Vista4</h1>;
 const Vista5 = () => <h1>Vista5</h1>;
 const Vista6 = () => <h1>Vista6</h1>;
 const Layout = () => <h1>Layout</h1>;

 return (
 <>
 <BrowserRouter>
 <Routes>
 <Route path="*" element={<h2>Pagina No encontrada</h2>}></Route>
 <Route path="/" element={<Layout />}></Route> 
 <Route path="/Home" element={<Home />}></Route>
 <Route path="/Vista1" element={<Vista1 />}></Route>
 <Route path="/Vista2" element={<Vista2/>}></Route>
 <Route path="/Vista3" element={<Vista3 />}></Route>
 <Route path="/Vista4" element={<Vista4 />}></Route>
 <Route path="/Vista5" element={<Vista5/>}></Route>
 <Route path="/Vista6" element={<Vista6 />}></Route>
 <Route path="/Layout" element={<Layout />}></Route>
  </Routes>
 </BrowserRouter>
 </>
 );
};
export default Router;