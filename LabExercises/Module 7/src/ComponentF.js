import React, { useContext } from 'react'
import { CountryContext, UserContext, AnotherContext} from './ContextApp'

// import UserContext from './UserContext'



export function ComponentF () {
        const user = useContext(UserContext)
        const country = useContext(CountryContext)
        const another = useContext(AnotherContext)
		return (
			<div>
				<h1>Hi I'm {user} from {another}, {country}</h1>
			</div>
    )
}


export default ComponentF