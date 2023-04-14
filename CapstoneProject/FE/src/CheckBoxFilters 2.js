import React from 'react'
import { FormControlLabel, FormGroup } from '@mui/material'
import { useContext } from 'react'
import {Checkbox} from '@mui/material'
import {PlantContext} from './App'
import axios from 'axios'

export default function CheckBoxFilters(props) {
    const cvalues = props.value
    const {setPlants} = useContext(PlantContext);

    //adds the props od newSearchType as props.filterType / the search query
    const filterDown = (prop) => {
        if (prop){
        const axPlants=`http://localhost:8080/api/plants/search/${props.filterType}/${prop}`
        console.log(axPlants)
        axios.get(axPlants)
        .then(response=> {console.log(response); setPlants(response.data)})
        .catch(error => {console.log(error)})}
        }
return (
    <FormGroup>
    <div>{
        cvalues && cvalues.length ?
        cvalues.map((prop, index)=>(
        <FormControlLabel control={<Checkbox/>} label={prop} key={index} onClick={(e)=>filterDown(prop)}/>
    )): null}</div>
    </FormGroup>
  )
}
