import React from 'react'
import '../../style/apropos.css';

function AccordionRespect() { 
    return (
    <details className="info__details respect">
        <summary className="info__title">
            Respect <i className="fa-solid fa-chevron-down"></i>
        </summary>
        <p className="info__text">
        La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.
        </p>
    </details>
  )
}

export default AccordionRespect;