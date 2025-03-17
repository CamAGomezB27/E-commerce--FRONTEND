import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home/Home";
import Products from "./pages/Products";
import Contact from "./pages/Contact";

const AppRoutes: React.FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}> //Aplicado a todo
                    <Route index element={<Home />} />
                    <Route path="productos" element={<Products />}/>
                    <Route path="contacto" element={<Contact />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes