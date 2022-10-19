import React from "react";
import Fiability from "../components/apropos/Fiability"
import Respect from "../components/apropos/Respect"
import Service from "../components/apropos/Service"
import Security from "../components/apropos/Security"
import '../style/apropos/apropos.css';

const Apropos = () => (
    <div className="apropos">
        <section className="apropos__banner">
            <div className="apropos__background">
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