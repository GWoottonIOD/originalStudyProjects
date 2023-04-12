import React from 'react'
import {NavLink} from 'react-router-dom'


const Navbar=()=> {
  return (
    <>
            <h3 className='garethGram'>GarethGram</h3>
    <nav>
        <NavLink to='/'> Home </NavLink>
        <NavLink to='/about'> About </NavLink>
        <NavLink to='/posts'>Posts</NavLink>
        <NavLink to='/profile'>Profile</NavLink>
    </nav>
    </>
  )
}

export default Navbar