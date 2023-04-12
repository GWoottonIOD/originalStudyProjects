// import React, { useContext } from 'react'
// import { AnotherContext } from './App'
// import { UserContext } from './App'
// // import UserContext from './UserContext'



// export function ComponentE () {
//         const user = useContext(UserContext)
//         const another = useContext(AnotherContext)
// 		return (
// 			<div>
// 				{user}-{another}
// 			</div>
//     )
// }


// export default ComponentE

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