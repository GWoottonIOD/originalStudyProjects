import React from 'react'
//import logo from './logo.svg';
//import './App.css';
// import HookClock from './HookClock';
import Home from './SocialMediaHome'
import Posts from './SocialMediaPosts'
import {Routes,Route} from 'react-router-dom'
import Navbar from './SocialMediaNav'
import { PageNotFound } from './SocialMediaPageNotFound';
import { Profile } from './SocialMediaProfile';

export default function App() {
    return (
    <div>
        <Navbar/>
        <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='posts' element={<Posts />}/>
            <Route path='profile' element={<Profile/>}/>
            <Route path='*' element={<PageNotFound/>}/>
        {/* <HookClock/> */}
        </Routes>
    </div>
    )
}
