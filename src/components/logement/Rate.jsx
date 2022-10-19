import React from 'react'
import '../../style/host.css';


function Rate ({rating}) {
	const stars = [1,2,3,4,5]

	return (
		<>
			<div id="host__rate">
				{stars.map((starRange)=> 
				rating >= starRange ? (
                    //Condition avec opérateur ternaire JS condition ? trueValue : falseValue
                    <svg key = {starRange.toString()} className = "rate__star"
                    width= "30" height= "30"viewBox="0 0 30 30" fill="#FF6060" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18.645 12L15 0L11.355 12H0L9.27 18.615L5.745 30L15 22.965L24.27 30L20.745 18.615L30 12H18.645Z" />
                    </svg>
				) : (
                    <svg key={starRange.toString()} className = "rate__star"
                    width= "30" height= "30" viewBox="0 0 30 30" fill="#e3e3e3" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18.645 12L15 0L11.355 12H0L9.27 18.615L5.745 30L15 22.965L24.27 30L20.745 18.615L30 12H18.645Z"/>
                    </svg>

				)
				)}
			</div>    
		</>
	);
};

export default Rate;













//////////////
/*
function Rate ({rating}) {
		return (
			<>
				<p>Note: {rating} Etoiles </p>
			</>
		);
	};
	
export default Rate;
*/