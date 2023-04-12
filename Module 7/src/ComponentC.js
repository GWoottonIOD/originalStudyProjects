import React, {useContext} from 'react'
import { CountContext } from './ContextApp';
// import UserContext from './UserContext'



export default function ReducerCounterC() {
    const countContext = useContext(CountContext)
    return (
        <div>
            <div>Count= {countContext.countState}</div>
            <button onClick={()=> countContext.countDispatch('increase')}>Increment</button>
            <button onClick={()=> countContext.countDispatch('decrease')} >Decrement</button>
            <button onClick={()=> countContext.countDispatch('reset')}>Reset</button>
        </div>)
}
