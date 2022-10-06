import React from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom'
//import { BrowserRouter as Router, Route } from "react-router-dom";
//import {IoStarSharp, IoChevronDownSharp, IoChevronUpSharp } from "react-icons/io5"; //Icone Etoile et chevron 
import Header from "./Header";
import Footer from "./Footer";
import Home from "../pages/Home";
import D404 from "../pages/D404";
import Apropos from "../pages/Apropos";
import Logement from "../pages/Logement";

class App extends React.Component{
    render(){
        return(
            <>
                <BrowserRouter>
                    <Header />
                    <Routes>
                        <Route path="/" element={<Home/>} />
                        <Route path="/404" element={<D404/>} />
                        <Route path="/a-propos" element={<Apropos/>} />
                        <Route path="/logement" element={<Logement/>} />
                    </Routes>
                    <Footer />
                </BrowserRouter>
            </>
        )
    }
}

export default App