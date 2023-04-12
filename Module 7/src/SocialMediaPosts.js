import axios from 'axios'
import React, {useState,useEffect} from 'react'

export default function Posts() {
    const [posts, setPosts] = useState([])
    const [query, setQuery] = useState(1)
    const [userEmail, setUserEmail] = useState('')
    const [userPost, setUserPost] = useState('')
    const [userName, setUserName] = useState('')
    

    useEffect(()=> {
        axios.get('https://jsonplaceholder.typicode.com/comments?postId='+query)
        .then(response=> {console.log(response); setPosts(response.data)})
        .catch(error => {console.log(error)})
        },[query])

    const sendPost=(e)=>{
        e.preventDefault()
        const newPost={'postId':1, 'id':posts.length+1, 'name':userName, 'email': userEmail, 'body': userPost}
        axios.post('https://jsonplaceholder.typicode.com/comments', newPost)
        .then(response=> {console.log(response);})
    }

    return (    
        <>
        <div>
            {/* <input type="text" name="postText" onChange={(e)=>setQuery(e.target.value)}/> */}
            <ul>
            {posts.map(post=>(
                <li key={post.id}><h4>{post.email}:</h4>{post.name}</li>
            ))}
            </ul>
        </div> 
        <div>
            <form onSubmit={sendPost}>
            <label>Please enter your name.</label>
            <div><input type="text" value={userName} onChange={e=>setUserName(e.target.value)}/></div>
            <label>Please enter your email.</label>
            <div><input type="text" value={userEmail} onChange={e=>setUserEmail(e.target.value)}/></div>
            <label>Please enter your post.</label>
            <div><input type="text" value={userPost} onChange={e=>setUserPost(e.target.value)}/></div>
            <button type="submit" >Add new post</button>
            </form>
        </div></>
    )
}
