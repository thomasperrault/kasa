import React from 'react'
import '../../style/apropos.css';

function AccordionFiability() {
    return (
    <details className="info__details service">
        <summary className="info__title">
            Services <i className="fa-solid fa-chevron-down"></i>
        </summary>
        <p className="info__text">
        Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.
        </p>
    </details>
  )
}

export default AccordionFiability