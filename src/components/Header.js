import React from "react";
import logo_couleur from '../img/logo_couleur.png';
import '../style/header.css';

const Header = () => (
    <header className="header"> 
        <img className="logo_couleur" src={logo_couleur} alt="Logo Kasa"></img>   
        <nav className="header_nav">
            <a href="/" className="header_nav_item" >Accueil</a>
            <a href="/a-propos" className="header_nav_item" >A Propos</a>
        </nav>
    </header>
)

export default Header