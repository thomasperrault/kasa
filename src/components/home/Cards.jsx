import React from 'react'
import { Link } from 'react-router-dom';
import Logements from '../../logements.json'
import '../../style/home/cards.css';

function JsonDataCards(){
    const DisplayData=Logements.map(
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
 
 export default JsonDataCards;

