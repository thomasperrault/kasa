import React from 'react'
import '../../style/apropos/apropos.css';

function AccordionFiability() {
    return (
    <details className="info__details fiability">
        <summary className="info__title">
            Fiabilité <i className="fa-solid fa-chevron-down"></i>
        </summary>
        <p className="info__text">
        Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conforment aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.
        </p>
    </details>
  )
}

export default AccordionFiability;