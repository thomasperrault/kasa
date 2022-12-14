import React from 'react'
import '../../style/apropos/apropos.css';

function CollapseSecurity() {
    return (
    /*<detail> élément de divulgation des détails*/
    <details className="info__details security">
        {/*Titre*/}
        <summary className="info__title">
            Sécurité <i className="fa-solid fa-chevron-down"></i>
        </summary>
        {/*Texte*/}
        <p className="info__text">
        La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.
        </p>
    </details>
  )
}

export default CollapseSecurity;