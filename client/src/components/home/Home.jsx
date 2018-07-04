import React from 'react'
import { Link } from 'react-router-dom'

const styleObj = {
	textDecoration: 'none',
	color: 'black',
	margin: '15px'
}

class Home extends React.Component {
	render() {
		return(
			<div className='nav-link-tile-container'>
				<Link className='no-decoration' to='/chosePage'>
					<div className='nav-link-tile'>View dogs!</div>
				</Link>
				<Link className='no-decoration' to='/'>
					<div className='nav-link-tile'>View accessories!</div>
				</Link>
				<Link className='no-decoration' to='/'>
					<div className='nav-link-tile'>View the platform!</div>
				</Link>
				<Link className='no-decoration' to='/'>
					<div className='nav-link-tile'>View the videos!</div>
				</Link>
			</div>
		)
	}
}

export default Home
