import React from 'react'
import JsonDataLogements from '../logements.json'
import '../style/cards.css';

console.log(JsonDataLogements);

function JsonDataDisplay(){
    const DisplayData=JsonDataLogements.map(
        (info)=>{
            return(
                <div className="cover_logement" key={info.id} >
                    <p className="cover_title"> {info.title} </p>
                    <img className="cover_img" src={info.cover} alt="cover"/>
                </div>
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

