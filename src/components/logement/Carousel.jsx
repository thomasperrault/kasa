import React, {useState, } from 'react'
import '../../style/logement/carousel.css';

function Carousel({pictures}) {
	const [locationPicture, setLocationPicture] = useState(0)

	/* Fonction d'appel de l'image suivante avec boucle */
	const nextPicture = () =>{
		//pictures.lenght mis à zéro lorsqu'on arrive au bout de la liste
		setLocationPicture(locationPicture === pictures.length -1 ? 0 : locationPicture +1)
	}

	/* Fonction d'appel de l'image précédente avec boucle */
	const previousPicture = () =>{		
		setLocationPicture(locationPicture === 0 ? pictures.length -1 : locationPicture -1);
	}
	//Fonction SI pour déterminer la présence des chevrons et numéro s'il y a une seule image
	if(pictures.length>1){
		return (
			<>
				{/* Chevrons de navigation*/}
				{<i className="fa-solid fa-chevron-left" onClick={previousPicture}></i>}
				{<i className="fa-solid fa-chevron-right" onClick={nextPicture}></i>}
				
				{/* Ajout des images du carousel */}
				{pictures.map ((img, index) =>{
					return (
						<div key ={index}>
							{index === locationPicture && <img src={img} alt= "Photos du logement" className='carousel__image'/>}
							{index === locationPicture && (
								/* Ajout du numéro de l'image */
								<span className='carousel__number'>
									{locationPicture +1 }/{pictures.length}
								</span>
							)}            
						</div>
					)
				})}      
			</>
		)
	}
	else{
		return (
			<>
				{/* Ajout des images du carousel */}
				{pictures.map ((img, index) =>{
					return (
						<div key ={index}>
							{index === locationPicture && <img src={img} alt= "Photos du logement" className='carousel__image'/>}        
						</div>
					)
				})}      
			</>
		)
	}
	
}

export default Carousel; 
