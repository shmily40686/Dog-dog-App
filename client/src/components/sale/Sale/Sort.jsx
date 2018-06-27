import React from 'react'
import $ from 'jquery'
import moment from 'moment'

import { connect } from 'react-redux'
import { changePosts } from '../../../action/changePost.js'


const mapStateToProps = (state, props) => {

	return {
		posts: state.posts
	}
}

const mapDispatchToProps = (dispatch, props) => {
	return {
		changePostsToSort: function (posts) {
			dispatch(changePosts(posts))
		}
	}
}

class Sort extends React.Component {

	constructor(props) {
	  super(props);
	    this.state = {
	    	show: false,

	    }
	    this.changeShowOrHide = this.changeShowOrHide.bind(this);
	    this.clickSort = this.clickSort.bind(this);
	}
	changeShowOrHide() {
		this.setState({
			show: !this.state.show
		})
	}


	clickSort (e) {
		var text = e.target.innerText
		if (text === 'New Post') {
			var newPosts = this.props.posts.sort(function(a,b){
				return moment(b.creatAt).format("YYYYMMDDHHMM") - moment(a.creatAt ).format("YYYYMMDDHHMM");
			})
			this.props.changePostsToSort(newPosts)
		} else if (text === 'Hot Post') {
			var newPosts = this.props.posts.sort(function(a,b){
				return b.view - a.view 
			})
			this.props.changePostsToSort(newPosts)
		} else if (text === 'Price Up') {
			var newPosts = this.props.posts.sort(function(a,b){
				return a.info.price.fullPrice - b.info.price.fullPrice 
			})
			this.props.changePostsToSort(newPosts)
		} else if (text === 'Age Up') {
			var newPosts = this.props.posts.sort(function(a,b){
				return parseInt('' + a.info.age.year + a.info.age.month) - parseInt('' + b.info.age.year + b.info.age.month)  
			})
			this.props.changePostsToSort(newPosts)
		} else if (text === 'Price Down') {
			var newPosts = this.props.posts.sort(function(a,b){
				return b.info.price.fullPrice - a.info.price.fullPrice 
			})
			this.props.changePostsToSort(newPosts)
		}  else if (text === 'Age Down') {
			var newPosts = this.props.posts.sort(function(a,b){
				return parseInt('' + b.info.age.year + b.info.age.month) - parseInt('' + a.info.age.year + a.info.age.month)  
			})
			this.props.changePostsToSort(newPosts)
		}

	}

	render() {
		return(
			<div className="dropdown">
				<button className="dropbtn" onClick={this.changeShowOrHide}>Sort</button>
			  <div onClick={this.clickSort} className="dropdown-content" style={{display: this.state.show ? 'block' : 'none'}}>
			    <div className="newpost">New Post</div>
			    <div className="hotpost">Hot Post</div>
			    <div className="price">Price Up</div>
			    <div className="price">Price Down</div>
			    <div className="age">Age Up</div>
			    <div className="age">Age Down</div>
			  </div>
			</div>
		)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Sort)