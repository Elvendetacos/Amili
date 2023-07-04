import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "../pages/home";
import Login from "../pages/login";
import Register from "../pages/register";
import ProductKey from "../pages/productKey";
import LandingPage from "../pages/landingPage";

function Router() {
  return ( 
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/register" element={<Register/>}></Route>
        <Route path="/key" element={<ProductKey/>}></Route>
        <Route path="/" element={<LandingPage/>}></Route>
      </Routes>
    </BrowserRouter>
   );
}

export default Router;
