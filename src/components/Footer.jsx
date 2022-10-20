
import React from "react";
import logo_blanc from '../img/logo_blanc.png';
import '../style/footer.css';

const Footer = () => (
    <footer className="footer"> 
        <img className="logo_blanc" src={logo_blanc} alt="Logo Kasa"></img>   
        <p className="footer_rights">&#xA9; 2020 Kasa. All rights reserved</p>
    </footer>
)

export default Footer
