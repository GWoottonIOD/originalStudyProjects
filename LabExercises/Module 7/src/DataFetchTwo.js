import React, {useEffect, useReducer} from 'react'
import axios from 'axios'

export default function DataFetchTwo() {
const initialState={
    loading:true,
    post:{},
    error:''
}

const reducer =(state,action)=>
{
    switch(action.type){
        case 'FETCH_SUCCESS':
            return{loading:false,
                post:action.payload,
                error:''}
        case 'FETCH_ERROR':
            return{loading:false,
            post:{},
        error:'Something went wrong'
        }
        default:
            return state
    }
}

useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/posts/1`)
      .then(response => {
          dispatch({type: 'FETCH_SUCCESS', payload: response.data, error:''})
      })
      .catch(error => {
          dispatch({type: 'FETCH_ERROR', payload: {}, error: error})
      })
  }, [])

const [state,dispatch] = useReducer(reducer, initialState)
  return (
    <div>
    {state.loading ? 'loading':state.post.title}
    {state.error ? state.error:null}</div>
  )
}

