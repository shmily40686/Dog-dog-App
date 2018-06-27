import React from 'react'
import { Link } from 'react-router-dom'

const styleObj = {
	textDecoration: 'none',
	color: 'black'
}

class Home extends React.Component {
	render() {
		return(
			<div>
				<Link to='/chosePage' style={styleObj}>
					<div>Dogs part go here </div>
				</Link>
				<Link to='/' style={styleObj}>
					<div>Store part go here </div>
				</Link>
				<Link to='/' style={styleObj}>
					<div>Platform part go here </div>
				</Link>
				<Link to='/' style={styleObj}>
					<div>Video part go here </div>
				</Link>
			</div>
		)
	}
}

export default Home