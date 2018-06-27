import React from 'react'
import { connect } from 'react-redux'
import { changeLocation } from '../../action/changeLocation.js'

const mapStateToProps = (state, props) => {

	return {
		location: state.location,
		logInBox: state.logInBox,
		user: state.user
	}
}

const mapDispatchToProps = (dispatch, props) => {
	return {
		changeLocationToStore: function (location) {
			dispatch(changeLocation(location))
		}
	}
}

class LogoInfoBox extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			logIn : true,
			locationBox: false,
			
		}

	this.changeLocation = this.changeLocation.bind(this);
	this.clickSwith = this.clickSwith.bind(this);
	}

	changeLocation (e) {
		this.props.changeLocationToStore(e.target.value)
	}

	clickSwith () {
		this.setState({
			logIn : !this.state.logIn,
			locationBox: !this.state.locationBox
		})
	}

	render() {
		return(
			<div style={{display: this.state.logInBox ? 'block' : 'none'}}>
				<div className="LogoInfoBox" style={{display: this.props.logIn ? 'block' : 'none'}}>
					<h3>`Hi ${this.props.user}`</h3>
					<p onClick={this.clickSwith}>{this.props.location}</p>
				</div>
				<div className="changeLocationBox" style={{display: this.state.locationBox ? 'block' : 'none'}}>
					<input type="text" onChange={this.changeLocation}/>
					<button onClick={this.clickSwith}>change location</button>
				</div>
			</div>
		)
	}
}

export default connect(mapStateToProps, mapDispatchToProps) (LogoInfoBox)