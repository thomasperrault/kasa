import React from "react";
import Carousel from "../components/logement/Carousel";
import Logement from "../components/logement/House";
import Tags from "../components/logement/Tag"; 
import Host from "../components/logement/Host"; 
import Rate from "../components/logement/Rate"; 
import Details from "../components/logement/Collapse_Details"; 

import '../style/logement/logement.css';

import { useParams } from 'react-router-dom';
import Logements from '../logements.json'

function LogementSheet() {
    //Récupération de l'id dans l'URL
    const {id} = useParams();
    //Récupération des données avec la fonction FIND
    const infoLogement = Logements.find ((logement)=> logement.id === id) 
     
    if(infoLogement !==undefined) {
    //Appel de toutes les infos pour ne pas les appelers dans chaques components
    const { title , location, tags , host, rating, pictures, description, equipments} = infoLogement
     return (
        <section className="logement">
            <section className="carousel">
                <Carousel pictures={pictures}/>
            </section>
            <section className="info__general">
                <div className="info__logement">
                    <div className="=info__logement__general">
                        <Logement title={title} location={location}/>
                    </div>
                    <Tags tags={tags}/>
                </div>
                <div className="info__host">
                    <Host host={host}/>
                    <Rate rating={rating}/>
                </div>
            </section>
            <section className="info__details">
                <Details description={description} equipments={equipments}/>
            </section>
        </section>
    ) 
    }else{
        window.location.href ="/404";    
    }
  }

  export default LogementSheet