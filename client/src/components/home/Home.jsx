import React from 'react'
import { Link } from 'react-router-dom'

class Home extends React.Component {
	goToStore = () => {
		this.props.history.push('/store')
	}	

	render() {
		return(
			<div>
				<Link to='/sale'>
					<div>Dogs part go here </div>
				</Link>
				<div onCLick={this.goToStore}>Store part go here </div>
				<div>Platform part go here </div>
				<div>Video part go here </div>
			</div>
		)
	}
}

export default Home