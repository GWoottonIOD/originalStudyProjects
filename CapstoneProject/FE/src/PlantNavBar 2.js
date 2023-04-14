import React from 'react'
import {NavLink} from 'react-router-dom'
import { AppBar } from '@mui/material'
import Toolbar from '@mui/material/Toolbar'
// import CameraIcon from '@mui/icons-material/PhotoCamera';
import Typography from '@mui/material/Typography';
import PlantSearch from './PlantSearch';


const Navbar=()=> {
  const users = <NavLink to='/users'>Users</NavLink>
  //gets the logged in user
  const currentUserString = localStorage.getItem('currentUser');
  const currentUser = JSON.parse(currentUserString);

  console.log(currentUser)
  return (
    <>
    <AppBar position="sticky" className='AppBar' sx={{backgroundColor: '#4A8E51'}}>
      <Typography variant="h3" id="plantica">
        Plantica
      </Typography>
      <Toolbar id="tool">          
        <Typography variant="h6" color="inherit" noWrap id="toolItems">
          <NavLink to='/'>Home</NavLink>
          {currentUser && currentUser.UserAdmin ? users : null}
          {currentUser ? <NavLink to='/profile'>{currentUser.UserName}</NavLink> : <NavLink to='/login' >Login</NavLink>}
        </Typography>
      </Toolbar>
      <Typography variant="h6" id="toolSearch">
        <PlantSearch/>
      </Typography>
    </AppBar>
    </>
  )
}

export default Navbar