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

class SeachBar extends React.Component {
	constructor(props) {
	  super(props);
	    this.state = {
	    	seach: "",
	    	beforeFilter : this.props.posts,
	    	seachOne: false
	    };
  this.seachHandler = this.seachHandler.bind(this);
  this.keyWordsFilter = this.keyWordsFilter.bind(this);
  }

  seachHandler(e) {
  	this.setState({
  		seach : e.target.value
  	})
  	console.log("seach",this.state.seach);
  }

  keyWordsFilter () {
  	 var app = this;
  	if(this.state.seachOne === false ) {
  	this.setState({
  		seachOne: true,
  		beforeFilter: app.props.posts
  	})
  	var str = this.state.seach
  	var strArr = str.split(" ");
  	var newPost = this.props.posts.map(function(post) {
  		var current = Object.assign({},post)
  		current["keyWords"] = current["keyWords"].toUpperCase()
  		return current
  	})

  	console.log("newpost",newPost)
  	for (var i = 0; i < strArr.length; i++) {
  			newPost = newPost.filter(function(post) {
					return post.keyWords.indexOf(strArr[i].toUpperCase()) > -1
  			})
  	}
  	console.log(newPost)

  	this.props.changePostsToStore(newPost)

  	} else {
 				  	var str = this.state.seach
				  	var strArr = str.split(" ");
				  	var newPost = this.state.beforeFilter.map(function(post) {
				  		var current = Object.assign({},post)
				  		current["keyWords"] = current["keyWords"].toUpperCase()
				  		return current
				  	})

				  	console.log("newpost",newPost)
				  	for (var i = 0; i < strArr.length; i++) {
				  			newPost = newPost.filter(function(post) {
									return post.keyWords.indexOf(strArr[i].toUpperCase()) > -1
				  			})
				  	}

				  	this.props.changePostsToStore(newPost)
		}
  }



	render() {
		console.log(this.props)
		return(
			<div className='SeachBar'>
				<input type="text" onChange={this.seachHandler}/>
				<button onClick={this.keyWordsFilter}>Seach</button>
			</div>
		)
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(SeachBar);