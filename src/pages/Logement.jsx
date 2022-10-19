import React from "react";
import Carousel from "../components/Carousel";
import Logement from "../components/House";
import Tags from "../components/Tag"; //A REPRENDRE A REPRENDRE A REPRENDRE
import Host from "../components/Host"; //A REPRENDRE A REPRENDRE A REPRENDRE
import Rate from "../components/Rate"; //A REPRENDRE A REPRENDRE A REPRENDRE
import Details from "../components/Details"; //A REPRENDRE A REPRENDRE A REPRENDRE

import { useParams } from 'react-router-dom';
import Logements from '../logements.json'

function LogementSheet() {
    const {id} = useParams();
    const infoLogement = Logements.find ((logement)=> logement.id === id) 
     
    if(infoLogement !==undefined) {
    const { title , location, tags , host, rating, pictures, description, equipments} = infoLogement
     return (
        <>
            <section className="carousel">
                <Carousel pictures={pictures}/>
            </section>
            <section className="info__general">
                <div className="info__logement">
                    <Logement title={title} location={location}/>
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
        </>
    ) 
    }else{
        window.location.href ="/404";    
    }
  }

  export default LogementSheet