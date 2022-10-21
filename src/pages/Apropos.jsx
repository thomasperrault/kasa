import React from "react";
import BannerApropos from "../components/apropos/Banner_Apropos"
import Fiability from "../components/apropos/Collapse_Fiability"
import Respect from "../components/apropos/Collapse_Respect"
import Service from "../components/apropos/Collapse_Service"
import Security from "../components/apropos/Collapse_Security"

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