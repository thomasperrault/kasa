import React from 'react'
import '../style/house.css';

function Details ({description, equipments}) {
  return (
      <div className='collapse__double'>
        <div id="collapse__info">
          <details className="collapse__details">
              <summary className="collapse__title">Description <i className="fa-solid fa-chevron-down"></i></summary>
              <p className="collapse__text">{description}</p>
          </details>
        </div>

        <div id="collapse__info">
          <details className="collapse__details">
              <summary className="collapse__title">Équipements <i className="fa-solid fa-chevron-down"></i></summary>
              <ul className="collapse__text">
                  {equipments.map ((equipment)=>{
                      return <li key = {`${equipment}`}>{equipment}</li>
                  })}
              </ul>
          </details>
        </div>
      </div>
    );
  };
  
export default Details;
