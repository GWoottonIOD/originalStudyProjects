import React from 'react'
import {useNavigate} from 'react-router-dom'

export default function Home() {
const navigate=useNavigate()
  return (
    <>
    <div>
        <h1>Homepage</h1>
        {/* <h2>Welcome {loggedInUser}</h2> */}
        <p>A very warm welcome to our social media app - GarethGram</p> 
      <p>Go to our posts! <button onClick={()=> navigate('posts')}>See our posts</button></p>
    </div>
    </>
  )
}
