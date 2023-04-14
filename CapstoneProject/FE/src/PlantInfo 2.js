import React from 'react'
import {useParams} from 'react-router-dom'
import {useEffect, useState} from 'react'
import axios from 'axios'
import Button from '@mui/material/Button';

export const PlantInfo = () => {
    const params = useParams();
    const plantid = params.plantid
    // state and useeffect

    const [plant, setPlant] = useState([]);
    

    useEffect(()=> {
        console.log('Fetching plant information')
        axios.get('http://localhost:8080/api/plants/'+plantid)
        .then(response=> {console.log(response.data); setPlant(response.data[0]);})
        .catch(error => {console.log(error)})
        },[plantid])

    const Vitamins = <div><b>Vitamins:</b> <br></br>{plant.PlantVitamins}</div>
    const Minerals = <div><b>Minerals:</b> <br></br>{plant.PlantMinerals}</div>
    const PharmaProps = <div><b>Pharmacutical properties:</b> <br></br>{plant.PlantPharmaProps}</div>
    const Desc = <div><b>Description:</b> <br></br>{plant.PlantDesc}</div>

    const [isVitaminsHidden, setVitaminsHidden] = useState(false);
    //hides/shows vitamins  
    const hiddenVitamins = () => {
        setVitaminsHidden(!isVitaminsHidden);
    }

    const [isMineralsHidden, setMineralsHidden] = useState(false);
    //hides/shows minerals     
    const hiddenMinerals = () => {
        setMineralsHidden(!isMineralsHidden);
    }

    const [isPharmaPropsHidden, setPharmaPropsHidden] = useState(false);
     //hides/shows pharma props  
    const hiddenPharmaProps = () => {
        setPharmaPropsHidden(!isPharmaPropsHidden);
    }

    const [isDescHidden, setDescHidden] = useState(false);
     //hides/shows description  
    const hiddenDesc = () => {
        setDescHidden(!isDescHidden);
    }
    return (
        <div className="plantInfo">
            {plant.PlantCName ?
            <>
            <h3>{plant.PlantCName}</h3>
            <img alt='plant' width={400} height={400}  src={plant.PlantIMGURL}></img>
            {!isDescHidden ? Desc : null}
            <div><Button variant="contained" onClick={hiddenDesc}>{isDescHidden? 'Show Plant Description':'Hide Plant Description'}</Button></div> 
            <div className='capitalise'><b>Latin:</b> <br></br>{plant.PlantLName}</div>
            {/* {poke.types.map((type, i) => <div key={i} className='capitalise'>Type {i+1}: {type.type.name}</div>)} */}
            <div><Button variant="contained" onClick={hiddenVitamins}>{isVitaminsHidden? 'Show Vitamins':'Hide Vitamins'}</Button></div> 
            {!isVitaminsHidden ? Vitamins : null}
            <div><Button variant="contained" onClick={hiddenMinerals}>{isMineralsHidden? 'Show Minerals':'Hide Minerals'}</Button></div> 
            {!isMineralsHidden ? Minerals : null}
            <div><Button variant="contained" onClick={hiddenPharmaProps}>{isPharmaPropsHidden? 'Show Pharmacutical Properties':'Hide Pharmacutical Properties'}</Button></div> 
            {!isPharmaPropsHidden ? PharmaProps : null}
            </>
            : <p> Plant: {plantid} not found</p>
            }
        </div>              
    )
}
