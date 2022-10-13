import React from "react";
import logo_couleur from '../img/logo_couleur.png';
import '../style/header.css';
import { Link } from "react-router-dom";

const Header = () => (
    <header className="header"> 
        <img className="logo_couleur" src={logo_couleur} alt="Logo Kasa"></img>   
        <nav className="header_nav">
            <Link to="/" className="header_nav_item" >Accueil</Link>
            <Link to="/a-propos" className="header_nav_item" >A Propos</Link>
        </nav>
    </header>
)

export default Header