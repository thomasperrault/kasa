import React from 'react'
import '../../style/logement/host.css';

function Host ({host}) {
    return (
        <>
            <div className="host__info">
                    <p className="host__name">{host.name}</p>
                    <img src={host.picture} alt="{host.name}" className="host__image" />
            </div>
        </>
    );
};
	
export default Host;

