import './App.css';
import React, {useState} from 'react';
import PlantHome from './PlantHome'
import PlantPNF from './PlantPNF';
import {Routes,Route} from 'react-router-dom';
import Navbar from './PlantNavBar';
import PlantInfoTemplate from './PlantInfoTemplate';
import {PlantInfo} from './PlantInfo';
import PlantUsers from './Users';
import PlantUserInfoTemplate from './UserInfoTemplate';
import {PlantUserInfo} from './UserInfo'
import { PlantInfoEdit } from './PlantInfoEdit';
import UserInfoEditTemplate from './UserInfoEditTemp';
import { UserInfoEdit } from './UserInfoEdit';
import Login from './Login';
import Register from './Register';
import { Profile } from './Profile';
import { PlantNew } from './PlantNew';
import { UserNew } from './UserNew';
import PgaeNotAllowed from './PNA';
export const PlantContext = React.createContext();
export const UsersContext = React.createContext();
export const CurrentUserContext = React.createContext();
export const PageTypeContext = React.createContext();
export const DropDownContext = React.createContext();



function App() {
  const [plants, setPlants] = useState([])
  const [users, setUsers] = useState([])
  const [currentUser, setCurrentUser] = useState({})
  const [pageType, setPageType] = useState('')
  const [dropDown, setDropDown] = useState ('')
  return (
    <PlantContext.Provider value={{plants, setPlants}}>
    <UsersContext.Provider value={{users, setUsers}}>
    <CurrentUserContext.Provider value={{currentUser, setCurrentUser}}>
    <PageTypeContext.Provider value={{pageType, setPageType}}>
    <DropDownContext.Provider value={{dropDown, setDropDown}}>
    <div>
      <Navbar/>
        <Routes>
            <Route path='/' element={<PlantHome />}/>
            <Route path='/plantnew' element={<PlantNew />}/>
            <Route path='/plantinfo' element={<PlantInfoTemplate />}>
              <Route path=':plantid' element={<PlantInfo/>}/>
            </Route>
            <Route path='/plantinfoedit' element={<PlantInfoTemplate/>}>
              <Route path=':planteditid' element={<PlantInfoEdit/>}/>
            </Route>
            <Route path='/users' element={<PlantUsers />}/>
            <Route path='/usernew' element={<UserNew />}/>
            <Route path='/userinfo' element={<PlantUserInfoTemplate/>}>
              <Route path=':userid' element={<PlantUserInfo/>}/>
            </Route> 
            <Route path='/userinfoedit' element={<UserInfoEditTemplate/>}>
              <Route path=':usereditid' element={<UserInfoEdit/>}/>
            </Route>
            <Route path='/login' element={<Login/>}/>
            <Route path='/profile' element={<Profile/>}/>
            <Route path='/reg' element={<Register/>}/>
            <Route path='/pna' element={<PgaeNotAllowed />}/>
            <Route path='*' element={<PlantPNF/>}/>
            </Routes>
    </div>
    </DropDownContext.Provider>
    </PageTypeContext.Provider>
    </CurrentUserContext.Provider>
    </UsersContext.Provider>
    </PlantContext.Provider>
  );
}

export default App;
