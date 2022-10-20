import React from "react";
import BannerApropos from "../components/apropos/Banner_Apropos"
import Fiability from "../components/apropos/Fiability"
import Respect from "../components/apropos/Respect"
import Service from "../components/apropos/Service"
import Security from "../components/apropos/Security"

const Apropos = () => (
    <div className="apropos">
        <BannerApropos/>
        <section className="apropos__info">
            <Fiability/>
            <Respect/>
            <Service/>
            <Security/>
        </section>
    </div>
)

export default Apropos