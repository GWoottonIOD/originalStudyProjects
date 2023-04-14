import React from 'react'
import {useParams} from 'react-router-dom'
import {useEffect, useState, useReducer} from 'react'
import axios from 'axios'
import Button from '@mui/material/Button';
import usePlantLogic from './usePlantLogic';

export const PlantInfo = () => {
    const params = useParams();
    const plantid = params.plantid
    // state and useeffect

    const [plant, setPlant] = useState([]);
    // const [state, dispatch, vState, mState, pState, dState] = usePlantLogic({vState: true}, {mState: true})
    const [state, dispatch] = usePlantLogic()
    

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
    // const hiddenVitamins = () => {
    //     setVitaminsHidden(!isVitaminsHidden);
    // }

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
            <div className='capitalise'><b>Latin:</b> <br></br>{plant.PlantLName}</div>
            <div><Button variant="contained" onClick={()=> dispatch({type: 'hideOrShow'})}>{state? 'Show Plant Information':'Hide Plant Information'}</Button></div> <br></br>
            {!state ? Desc : null} <br></br>
            {!state ? Vitamins : null}<br></br>
            {!state ? Minerals : null}<br></br>
            {!state ? PharmaProps : null}
            </>
            : <p> Plant: {plantid} not found</p>
            }
        </div>              
    )
    // return (
    //     <div className="plantInfo">
    //         {plant.PlantCName ?
    //         <>
    //         <h3>{plant.PlantCName}</h3>
    //         <img alt='plant' width={400} height={400}  src={plant.PlantIMGURL}></img>
    //         {!state ? Desc : null}
    //         <div><Button variant="contained" onClick={()=> dispatch({type: 'hideOrShow'})}>{state? 'Show Plant Description':'Hide Plant Description'}</Button></div> 
    //         <div className='capitalise'><b>Latin:</b> <br></br>{plant.PlantLName}</div>
    //         <div><Button variant="contained" onClick={()=> dispatch({type: 'hideOrShow'})}>{state? 'Show Vitamins':'Hide Vitamins'}</Button></div> 
    //         {!state ? Vitamins : null}
    //         <div><Button variant="contained" onClick={()=> dispatch({type: 'hideOrShow'})}>{state? 'Show Minerals':'Hide Minerals'}</Button></div> 
    //         {!state ? Minerals : null}
    //         <div><Button variant="contained" onClick={()=> dispatch({type: 'hideOrShow'})}>{state? 'Show Pharmacutical Properties':'Hide Pharmacutical Properties'}</Button></div> 
    //         {!state ? PharmaProps : null}
    //         </>
    //         : <p> Plant: {plantid} not found</p>
    //         }
    //     </div>              
    // )
}
