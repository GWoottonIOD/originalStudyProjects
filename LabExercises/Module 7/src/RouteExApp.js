import React from 'react'
//import logo from './logo.svg';
//import './App.css';
// import HookClock from './HookClock';
import Home from './RouteExHome'
import Posts from './RouteExPosts'
import {Routes,Route} from 'react-router-dom'
//import DocTitleTwo from './DocTitleTwo'
import Navbar from './RouteExNav'
//import OrderSummary from './RouteOrderSummary';
import { PageNotFound } from './RouteExPageNotFound';
import Dashboard from './RouteExDashboard';

export default function App() {
    return (
    <div>
        <Navbar/>
        <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='posts' element={<Posts />}/>
            <Route path='dashboard' element={<Dashboard/>}/>
            <Route path='*' element={<PageNotFound/>}/>
        {/* <HookClock/> */}
        </Routes>
    </div>
    )
}

