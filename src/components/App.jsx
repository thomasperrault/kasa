import React from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Header from "./Header";
import Footer from "./Footer";
import Home from "../pages/Home";
import Error404 from "../pages/Error404";
import Apropos from "../pages/Apropos";
import Logement from "../pages/Logement";
import '../style/app.css';



class App extends React.Component{
    render(){
        return(
                <BrowserRouter>
                    <Header />
                    <Routes>
                        <Route exact path="/" element={<Home/>} />
                        <Route path="/logement" element={<Logement/>} />
                        <Route path="/a-propos" element={<Apropos/>} />
                        <Route path="/*" element={<Error404/>} />
                    </Routes>
                    <Footer />
                </BrowserRouter>
        )
    }
}

export default App