import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "../pages/home";
import Login from "../pages/login";
import Register from "../pages/register";
import ProductKey from "../pages/productKey";

function Router() {
  return ( 
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home/>}></Route>
        <Route path="/" element={<Login/>}></Route>
        <Route path="/register" element={<Register/>}></Route>
        <Route path="/key" element={<ProductKey/>}></Route>
      </Routes>
    </BrowserRouter>
   );
}

export default Router;
