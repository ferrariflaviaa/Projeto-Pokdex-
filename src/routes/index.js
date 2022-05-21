import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Details from "../pages/Details";

const RoutesAplication = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/detalhes/:id" element={<Details />} />
            </Routes>
        </BrowserRouter>
    )
}

export default RoutesAplication;