import React from 'react'
import { Link } from 'react-router-dom'

import Home from './Home.jsx'

class Welcome extends React.Component {

	render() {
		return(
			<div>
				<h1>Logo</h1>
				<h2>where are you looking for ?</h2>
				<input type="text" />
				<Link to='/home'>GO</Link>
				
			</div>
		)
	}
}

export default Welcome