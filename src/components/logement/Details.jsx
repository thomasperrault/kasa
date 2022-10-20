import React from 'react'
import '../../style/logement/details.css';

function Details ({description, equipments}) {
  return (
	  	<>
			{/*<detail> élément de divulgation des détails*/}
			<details className="info__collapse description">
				{/*Titre*/}
				<summary className="collapse__title">Description <i className="fa-solid fa-chevron-down"></i></summary>
				{/*Texte*/}
				<p className="collapse__text">{description}</p>
			</details>
			<details className="info__collapse equipment">
				<summary className="collapse__title">Équipements <i className="fa-solid fa-chevron-down"></i></summary>
				<ul className="collapse__text">
					{equipments.map ((equipment)=>{
						return <li key = {`${equipment}`}>{equipment}</li>
					})}
				</ul>
			</details>
		</>
  );
};
  
export default Details;
