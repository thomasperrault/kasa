import React from "react";
import JsonDataDisplay from "../components/Cards"
import HomeSloganImg from "../img/home_slogan_img.png"
import '../style/home.css';


const Home = () => (
    <>
        <section className="home_slogan">
            <h1 className="home_slogan_txt">Chez vous, partout et ailleurs</h1>
            <img src={HomeSloganImg} alt="Paysage de bord de mer"/>
        </section>
        <JsonDataDisplay/>
    </>
)

export default Home