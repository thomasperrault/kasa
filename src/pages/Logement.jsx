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
            <Carousel pictures={pictures}/>
            <div>
                <div>
                    <Logement title={title} location={location}/>
                    <Tags tags={tags}/>
                </div>
                <div>
                    <div>
                        <Host host={host}/>
                    </div>
                    <div>
                        <Rate rating={rating}/>
                    </div>
                </div>
            </div>
            <div>
                <Details description={description} equipments={equipments}/>
            </div>
        </>
    ) 
    }else{
        window.location.href ="/404";    
    }
  }

  export default LogementSheet