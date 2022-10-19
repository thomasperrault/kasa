import React from 'react'
import '../style/house.css';

function Host ({host}) {
    return (
        <>
            <div id="host__tag">
                    <p id="host__tag__name">{host.name}</p>
                    <img src={host.picture} alt="{host.name}" id="host__tag__image" />
            </div>
        </>
    );
};
	
export default Host;

