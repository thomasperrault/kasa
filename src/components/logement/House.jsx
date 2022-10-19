import React from 'react'
import '../../style/logement/house.css';

function Logement ({title, location}) {
		return (
			<>
				<h1 className="logement__title">{title}</h1>
				<h2 className="logement__location">{location} </h2>
			</>
		);
	};
	
export default Logement;