import React, { Component } from 'react'
import ComponentE from './ComponentE'
import ComponentF from './ComponentF'
import {UserContext, AnotherContext, CountryContext} from './ContextApp'

export class ComponentC extends Component {
	render() {
		return (
			<div>
				<UserContext.Provider value={'Gareth'}> 
				<AnotherContext.Provider value={'Tauranga'}>
				<CountryContext.Provider value={'New Zealand'}>
                <ComponentE/>
                <ComponentF/>
				</CountryContext.Provider>
				</AnotherContext.Provider>
				</UserContext.Provider>
			</div>
		)
	}
}

export default ComponentC