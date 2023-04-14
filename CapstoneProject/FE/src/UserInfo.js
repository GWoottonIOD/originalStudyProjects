import React from 'react'
import {useParams} from 'react-router-dom'
import {useEffect, useState} from 'react'
import axios from 'axios'
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";

export const PlantUserInfo = () => {
    const params = useParams();
    const userid = params.userid
    // state and useeffect

    const [user, setUser] = useState([]);
    const currentUserString = localStorage.getItem('currentUser');
    const currentUser = JSON.parse(currentUserString);
    let navigate = useNavigate();

    const doNotProceed = () => {
        console.log(currentUser)
        if (currentUser===null || currentUser.UserAdmin===0){
            navigate('/pna');
        }
      }
    //description field - make more user friendly
    doNotProceed()
    
    //gets the users
    useEffect(()=> {
        console.log('Fetching user information')
        axios.get('http://localhost:8080/api/users/'+userid)
        .then(response=> {console.log(response.data); setUser(response.data[0]);})
        .catch(error => {console.log(error)})
        },[userid])

    const FName = <div><b>First name:</b><br></br> {user.FName}</div>
    const LName = <div><b>Last Name:</b><br></br> {user.LName}</div>
    const UserName = <div><b>Username:</b><br></br> {user.UserName}</div>
    const PassWord = <div><b>Password:</b><br></br> {user.PassWord}</div>
    const UserAdmin = <div><b>Admin: </b><br></br> {user.UserAdmin}</div>

    const [isFNamehidden, setFNameHidden] = useState(false);
    //hides/shows firstname
    const hiddenFName = () => {
        setFNameHidden(!isFNamehidden);
    }

    const [isLNameHidden, setLNameHidden] = useState(false);
    //hides/shows lastname
    const hiddenLName = () => {
        setLNameHidden(!isLNameHidden);
    }

    const [isUserNameHidden, setUserNameHidden] = useState(false);
    //hides/shows username
    const hiddenUserName = () => {
        setUserNameHidden(!isUserNameHidden);
    }

    const [isPassWordHidden, setPassWordHidden] = useState(false);
    //hides/shows password
    const hiddenPassWord = () => {
        setPassWordHidden(!isPassWordHidden);
    }

    const [isUserAdminHidden, setUserAdminHidden] = useState(false);
    //hides/shows admin status
    const hiddenUserAdmin = () => {
        setUserAdminHidden(!isUserAdminHidden);
    }
    return (
        <div className="userinfo">
            {user.id ?
            <>
            <h3>{user.id}</h3>
            <img alt='user' width={400} height={400}  src={'https://cdn-icons-png.flaticon.com/512/1946/1946429.png'}></img>
            {/* {poke.types.map((type, i) => <div key={i} className='capitalise'>Type {i+1}: {type.type.name}</div>)} */}
            <div><Button variant="contained" onClick={hiddenFName}>{isFNamehidden? 'Show first name':'Hide first name'}</Button></div> 
            {!isFNamehidden ? FName : null}
            <div><Button variant="contained" onClick={hiddenLName}>{isLNameHidden? 'Show last name':'Hide last name'}</Button></div> 
            {!isLNameHidden ? LName : null}
            <div><Button variant="contained" onClick={hiddenUserName}>{isUserNameHidden? 'Show username':'Hide username'}</Button></div> 
            {!isUserNameHidden ? UserName : null}
            <div><Button variant="contained" onClick={hiddenPassWord}>{isPassWordHidden? 'Show password':'Hide password'}</Button></div> 
            {!isPassWordHidden ? PassWord : null}
            <div><Button variant="contained" onClick={hiddenUserAdmin}>{isUserAdminHidden? 'Show admin status':'Hide admin status'}</Button></div> 
            {!isUserAdminHidden ? UserAdmin : null}
            </>
            : <p> Plant: {userid} not found</p>
            }
        </div>              
    )
}
