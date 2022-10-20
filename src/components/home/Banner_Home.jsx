import React from 'react'
import '../../style/home/home.css';

function Banner() { 
    return (
    <section className="home__banner">
        <div className="home__background">
            <h1 className="home__title--desktop">Chez vous, partout et ailleurs</h1>
            <h1 className="home__title--mobile">Chez vous, <br></br>
            partout et ailleurs</h1>
        </div>
    </section>
  )
}

export default Banner;