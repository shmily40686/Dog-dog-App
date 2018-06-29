import React from 'react'
import { connect } from 'react-redux'
import axios from 'axios'

import { changeCurrentUser } from '../../action/changeCurrentUser.js'
import { changeLogInBox } from '../../action/changeLocation.js'

const mapStateToProps = (state, props) => {

	return {
		location: state.location,
		user: state.user,
		users: state.users
	}
}

const mapDispatchToProps = (dispatch, props) => {
	return {
		changeUserToStore : function (user) {
			dispatch(changeCurrentUser(user))
		},
		changeLogInToStore: function (boolean) {
			dispatch(changeLogInBox(boolean))
		}
	}
}

class logIn extends React.Component {

	constructor(props) {
	  super(props);
	  this.state = {
	  	username: null,
	  	password: null,
	  	repeatPassword: null,
	  	signupOrlogin: false
	  }
	this.submitLogIn = this.submitLogIn.bind(this);
	this.submitSignUp = this.submitSignUp.bind(this);
	this.getUsername = this.getUsername.bind(this);
	this.getPassword = this.getPassword.bind(this);
	this.getRepeatPassword = this.getRepeatPassword.bind(this);
	this.signupOrlogin = this.signupOrlogin.bind(this);
	this.changeToLogIn = this.changeToLogIn.bind(this);
	this.changeToSignUp = this.changeToSignUp.bind(this);
	}

	changeToLogIn () {
		this.setState({
				signupOrlogin: false
		})
	}

	changeToSignUp () {
		this.setState({
				signupOrlogin: true
		})
	}

	getUsername (e) {
		this.setState({
			username: e.target.value
		})
	}

	getPassword (e) {
		this.setState({
			password: e.target.value
		})
	}

	getRepeatPassword (e) {
		this.setState({
			repeatPassword: e.target.value
		})
	}



	submitLogIn (e) {
		e.preventDefault()
  		var app = this;
  		axios({
	  		method: 'post',
	  		url: "http://localhost:3000/api/login",
	  		data: {
	  			username: app.state.username,
	  			password: app.state.password
	  		}
	  	})
		  .then(function (response) {
		    console.log("login! ", response);
		    app.props.changeUserToStore(response.data)
		    app.props.changeLogInToStore(true)
		    app.props.history.push('/home')

		  })
		  .catch(function (error) {
		    console.log(error);
		  });
	}

	submitSignUp (e) {
		e.preventDefault()
		if (this.state.password === this.state.repeatPassword) {
			var app = this;
  		axios({
	  		method: 'post',
	  		url: "http://localhost:3000/api/signup",
	  		data: {
	  			username: app.state.username,
	  			password: app.state.password,
	  		}
	  	})
		  .then(function (response) {
		    console.log("signup! ", response);
		    app.props.history.push('/login')

		  })
		  .catch(function (error) {
		    console.log(error);
		  });
		} else {
			console.log("not same password")
			console.log(this.state.password)
			console.log(this.state.repeatPassword)
		}
  		
	}


	signupOrlogin () {
		if (this.state.signupOrlogin) {
			return (
			<div className="signup">
					<h2 className="avatar" >Sign Up</h2>
						<form  onSubmit={this.submitSignUp}>
						  <div className="imgcontainer">
						    <img src="img_avatar2.png" alt="Avatar" className="avatar"/>
						  </div>

						  <div className="container">
						    <label htmlFor="uname"><b>Username</b></label>
						    <input className="login" type="text" placeholder="Enter Username" name="uname" onChange={this.getUsername}/>

						    <label htmlFor="psw"><b>Password</b></label>
						    <input className="login" type="password" placeholder="Enter Password" name="psw"  onChange={this.getPassword}/>
						      
						    <label htmlFor="psw"><b>Repeat Password</b></label>
						    <input className="login" type="password" placeholder="Repeat Password " name="psw"  onChange={this.getRepeatPassword}/> 
						    
						    <button className="loginButton"type="submit">Sign Up</button>
						  </div>
						</form>
				</div>
			)
		} else {
			return (
				<div className="logIn">
					<h2 className="avatar" >Login</h2>
						<form  onSubmit={this.submitLogIn}>
						  <div className="imgcontainer">
						    <img src="img_avatar2.png" alt="Avatar" className="avatar"/>
						  </div>

						  <div className="container">
						    <label htmlFor="uname"><b>Username</b></label>
						    <input className="login" type="text" placeholder="Enter Username" name="uname" onChange={this.getUsername}/>

						    <label htmlFor="psw"><b>Password</b></label>
						    <input className="login" type="password" placeholder="Enter Password" name="psw"  onChange={this.getPassword}/>
						        
						    <button className="loginButton"type="submit">Login</button>
						    <label>
						      <input className="login" type="checkbox"  name="remember"/> Remember me
						    </label>
						  </div>
						  <div className="container" style={{"backgroundColor":"#f1f1f1"}}>
						    <button type="button" className="cancelbtn">Cancel</button>
						    <span className="psw">Forgot <a href="#">password?</a></span>
						  </div>
						</form>
				</div>
			)
		}
	}
	render() {
		return(
			<div>
				<div > 
					<div onClick={this.changeToLogIn}>Login</div>
					<div onClick={this.changeToSignUp}>Sign Up</div>
				</div>
				<div>{this.signupOrlogin()}</div>
			</div>
		)
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(logIn)

