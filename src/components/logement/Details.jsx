import React from 'react'
import '../../style/house.css';

function Details ({description, equipments}) {
  return (
	  <>
		<details className="info__collapse description">
			<summary className="collapse__title">Description <i className="fa-solid fa-chevron-down"></i></summary>
			<p className="collapse__text">{description}</p>
		</details>
		<details className="info__collapse">
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
