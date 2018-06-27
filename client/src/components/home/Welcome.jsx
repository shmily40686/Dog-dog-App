import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { changeLocation } from '../../action/changeLocation.js'

import Home from './Home.jsx'


const mapStateToProps = (state, props) => {

	return {
		location: state.location	
	}
}

const mapDispatchToProps = (dispatch, props) => {
	return {
		changeLocationToStore: function (location) {
			dispatch(changeLocation(location))
		}
	}
}

class Welcome extends React.Component {

	constructor(props) {
	  super(props);
	this.locationHandler = this.locationHandler.bind(this);
	}

  locationHandler(e) {
  	this.props.changeLocationToStore(e.target.value)
  	console.log("locationHandler",this.props.location);
  }

	render() {
		return(
			<div>
				<Link to='/login'>Sign In</Link>
				<h1>Logo</h1>
				<h2>where are you looking for ?</h2>
				<input type="text" onChange={this.locationHandler}/>
				<Link to='/home'>GO</Link>
				
			</div>
		)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Welcome)