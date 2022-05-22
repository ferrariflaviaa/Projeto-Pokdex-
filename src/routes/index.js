import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Details from "../pages/Details";
import Pokedex from '../pages/Pokedex/index'

const RoutesAplication = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/detalhes/:id" element={<Details />} />
                <Route path="/pokedex" element={Pokedex}/>
            </Routes>
        </BrowserRouter>
    )
}

export default RoutesAplication;