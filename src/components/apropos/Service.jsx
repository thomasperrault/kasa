import React from 'react'
import '../../style/apropos/apropos.css';

function AccordionFiability() {
    return (
    /*<detail> élément de divulgation des détails*/
    <details className="info__details service">
        {/*Titre*/}        
        <summary className="info__title">
            Services <i className="fa-solid fa-chevron-down"></i>
        </summary>
        {/*Texte*/}
        <p className="info__text">
        Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.
        </p>
    </details>
  )
}

export default AccordionFiability