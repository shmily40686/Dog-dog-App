import React from 'react'
import { connect } from 'react-redux'
import { changePosts } from '../../../action/changePost.js'


const mapStateToProps = (state, props) => {

	return {
		posts: state.posts
	}
}

const mapDispatchToProps = (dispatch, props) => {
	return {
		changePostsToStore: function (posts) {
			dispatch(changePosts(posts))
		}
	}
}


class FilterBox extends React.Component {
	constructor(props) {
	  super(props);
	    this.state = {
	     small: false,
	     middle: false,
	     large: false,
	     male: false,
	     female: false,
	     posts: null
	    };
	this.sizeSmallClickHandler = this.sizeSmallClickHandler.bind(this);
	this.sizeMiddleClickHandler = this.sizeMiddleClickHandler.bind(this);
	this.sizeLargeClickHandler = this.sizeLargeClickHandler.bind(this);
	this.sexMaleClickHandler = this.sexMaleClickHandler.bind(this);
	this.sexFemaleClickHandler = this.sexFemaleClickHandler.bind(this);
  
  }


  sizeSmallClickHandler () {
  	this.setState({
  		small: !this.state.small,
  	}, function() {
  		if (this.state.small) {
  			var newPost = this.props.posts.filter(function(post) {
  				return post.info.size === 'Small';
  			})
  			
  			this.setState({
  				posts: this.props.posts
  			},function() {
  				this.props.changePostsToStore(newPost)
  			})
  			
  		} else {
  			this.props.changePostsToStore(this.state.posts)
  		}

  	})

  }

  sizeMiddleClickHandler () {
  	this.setState({
  		middle: !this.state.middle,
  	}, function() {
  		if (this.state.middle) {
  			var newPost = this.props.posts.filter(function(post) {
  				return post.info.size === 'Middle';
  			})
  			
  			this.setState({
  				posts: this.props.posts
  			},function() {
  				this.props.changePostsToStore(newPost)
  			})
  		} else {
  			this.props.changePostsToStore(this.state.posts)
  		}

  	})
  }

  sizeLargeClickHandler () {
  	this.setState({
  		large: !this.state.large
  	}, function() {
  		if (this.state.large) {
  			var newPost = this.props.posts.filter(function(post) {
  				return post.info.size === 'Large';
  			})
  			
  			this.setState({
  				posts: this.props.posts
  			},function() {
  				this.props.changePostsToStore(newPost)
  			})
  		} else {
  			this.props.changePostsToStore(this.state.posts)
  		}

  	})
  }

  sexMaleClickHandler () {
  	this.setState({
  		male: !this.state.male
  	}, function() {
  		if (this.state.male) {
  			var newPost = this.props.posts.filter(function(post) {
  				return post.info.sex === 'male';
  			})
  			
  			this.setState({
  				posts: this.props.posts
  			},function() {
  				this.props.changePostsToStore(newPost)
  			})
  		} else {
  			this.props.changePostsToStore(this.state.posts)
  		}

  	})
  }

  sexFemaleClickHandler () {
  	this.setState({
  		female: !this.state.female
  	}, function() {
  		if (this.state.female) {
  			var newPost = this.props.posts.filter(function(post) {
  				return post.info.sex === 'female';
  			})
  			this.setState({
  				posts: this.props.posts
  			},function() {
  				this.props.changePostsToStore(newPost)
  			})
  			

  		} else {
  			this.props.changePostsToStore(this.state.posts)
  		}

  	})
  }

	render() {
		return(
			<div >
				<div style={{width:"100px"}}>
					<h3>SIZE</h3>
					<input type='checkbox' onClick={this.sizeSmallClickHandler}/>Small<br/>
					<input type='checkbox' onClick={this.sizeMiddleClickHandler}/>Middle<br/>
					<input type='checkbox' onClick={this.sizeLargeClickHandler}/>Large<br/>
				</div>
				<div style={{width:"100px"}}>
					<h3>SEX</h3>
					<input type='checkbox' onClick={this.sexMaleClickHandler}/>Male<br/>
					<input type='checkbox' onClick={this.sexFemaleClickHandler}/>Female<br/>
				</div>
			</div>
		)
	}
}


export default connect(mapStateToProps, mapDispatchToProps)(FilterBox);