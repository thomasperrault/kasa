import React from "react";
import Fiability from "../components/apropos/Fiability"
import Respect from "../components/apropos/Respect"
import Service from "../components/apropos/Service"
import Security from "../components/apropos/Security"
import '../style/apropos.css';

const Apropos = () => (
    <div className="apropos">
        <section className="apropos__banner">
            <div className="apropos__background">
                <h1 className="apropos__title--desktop">Chez vous, partout et ailleurs</h1>
                <h1 className="apropos__title--mobile">Chez vous, <br></br>
                partout et ailleurs</h1>
            </div>
        </section>
        <section className="apropos__info">
            <Fiability/>
            <Respect/>
            <Service/>
            <Security/>
        </section>
        
    </div>
)

export default Apropos