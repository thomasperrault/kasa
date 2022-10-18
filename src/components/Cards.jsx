import React from 'react'
import { Link } from 'react-router-dom';
import JsonDataLogements from '../logements.json'
import '../style/cards.css';

console.log(JsonDataLogements);

function JsonDataDisplay(){
    const DisplayData=JsonDataLogements.map(
        (info)=>{
            return(
                <Link className="cover_logement" key={info.id} to={`/logement/${info.id}`} style={{backgroundImage: `url(${info.cover})`}}>
                    <p className="cover_title"> {info.title} </p>                 
                </Link>
            )
        }
    )
 
    return(
        <>
            <div className="cover_global">                     
                {DisplayData}    
            </div>
        </>            
    )
 }
 
 export default JsonDataDisplay;

