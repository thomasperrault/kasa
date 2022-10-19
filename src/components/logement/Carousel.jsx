import React, {useState, } from 'react'
import '../../style/carousel.css';

function Carousel({pictures}) {
	const [locPict, setlocPict] = useState(0)

	/* Appel de l'image suivantes */
	const nextPicture = () =>{
		setlocPict(locPict === pictures.length -1 ? 0 : locPict +1)
	}

	/* Appel l'image précédente */
	const previousPicture = () =>{
		setlocPict(locPict === 0 ? pictures.length -1 : locPict -1);
	}

	return (
		<>
			{/* Gestion des chevrons de navigation*/}
			{pictures.length > 1 && <i className="fa-solid fa-chevron-left" onClick={previousPicture}></i>}
			{pictures.length > 1 && <i className="fa-solid fa-chevron-right" onClick={nextPicture}></i>}
			
			{/* Ajout des images du carousel */}
			{pictures.map ((img, index) =>{
				return (
					<div key ={index}>
						{index === locPict && <img src={img} alt= "Photos du logement" className='carousel__image'/>}
						{index === locPict && (
							/* Ajout du numéro de l'image */
							<span className='carousel__number'>
								{locPict +1 }/{pictures.length}
							</span>
						)}            
					</div>
				)
			})}      
		</>
	)
}

export default Carousel; 
