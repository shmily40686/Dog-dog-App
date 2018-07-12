import React from 'react'
import { connect } from 'react-redux'
import { addPosts, changePosts } from '../../../action/changePost.js'
import { changeCurrentPosts } from '../../../action/changeCurrentPost.js'
import { addUsers } from '../../../action/changeUser.js'
import axios from 'axios'
import EntrySale from './EntrySale.jsx'
import SeachBar from './SeachBar.jsx'
import Sort from './Sort.jsx'
import ClickSale from './clickSale.jsx'
import FilterBox from './FilterBox.jsx'
import { Link } from 'react-router-dom'


// import { fakeData } from './fakedata.js';

const mapStateToProps = (state, props) => {

	return {
		posts: state.posts,
		users:state.users
	}
}

const mapDispatchToProps = (dispatch, props) => {
	return {
		addPostsToStore: function (posts) {
			dispatch(addPosts(posts))
		},
		addUsersToStore: function (users) {
			dispatch(addUsers(users))
		},
		changePostsToStore: function (posts) {
			dispatch(changePosts(posts))
		},
		changeCurrentPostToStore: function (post) {
			dispatch(changeCurrentPosts(post))
		}
	}
}

class Sale extends React.Component {
	constructor(props) {
	  super(props);
	    this.state = {
	    	currentPost: '',
	    	view: true,
	    	currentPage: 1,
	    	postsPerPage:5,
	    };
	this.showComponent = this.showComponent.bind(this);
	this.changeView = this.changeView.bind(this);
	this.changeCurrentPost = this.changeCurrentPost.bind(this);
	this.handleClickPage = this.handleClickPage.bind(this);
	this.changeComments = this.changeComments.bind(this);

  }

  handleClickPage (e) {
  	this.setState({
  		currentPage: Number(e.target.id)
  	})
  }

	componentDidMount () {
		console.log('componentDidMount')
		console.log('currentPost',this.state.currentPost)

		fetch('http://localhost:3000/api/posts')
			.then(res => {
				console.log('res: ' ,res)
				return res.json()
			}).then((data) => {
				let postIds = new Set(this.props.posts.map(function (post) { return post._id; }))
				let newPosts = data.filter(function (post) {
					return !postIds.has(post._id)
				}).map(function(post) {
					post.keyWords = "";
					post.keyWords += post.info.type;
					post.keyWords += post.info.color;
					post.keyWords += post.location.city;
					return post;
				})

				this.props.addPostsToStore(newPosts)
				this.setState({
					currentPost: newPosts[0]
				})
			})
			.catch(function (err) {
				console.error('error getting data: ', err)
			});

			fetch('http://localhost:3000/api/users')
			.then(res => {
				console.log('res: ' ,res)
				return res.json()
			}).then((data) => {
				console.log("users",data)

				let userIds = new Set(this.props.users.map(function (user) { return user._id; }))
				let newUsers = data.filter(function (user) {
					return !userIds.has(user._id)
				})
				this.props.addUsersToStore(newUsers)

			})
			.catch(function (err) {
				console.error('error getting data: ', err)
			})

	}
	changeCurrentPost (post) {
		var app = this;
		this.setState({
			view:!this.state.view,
			currentPost:post
		},function() {
			console.log("currentPost", app.state.currentPost)
			app.props.changeCurrentPostToStore(post)
			axios({
	  		method: 'post',
	  		url: `http://localhost:3000/api/viewUp/${app.state.currentPost._id}`,
	  	})
		  .then(function (response) {
		    console.log("view add up ", response);
		    var newPosts = app.props.posts.map(function(x) {
		    	if (x._id === response.data._id) {
		    		x.view++
		    	}
		    	return x ; 
		    })
		    app.props.changePostsToStore(newPosts)

		  })
		  .catch(function (error) {
		    console.log(error);
		  });
		})
	}

	changeView () {
		this.setState({
			view:!this.state.view
		})
	}

	changeComments (data) {
	  var newPost = Object.assign({}, this.state.currentPost)
	   newPost.comments.push(data)
	   console.log("data",data)
	  this.setState({
	   currentPost: newPost
	  })
	 }


	showComponent () {
		if (this.state.view === true) {
			const indexOfLastPost = this.state.currentPage * this.state.postsPerPage;
			const indexOfFirstPost = indexOfLastPost - this.state.postsPerPage;
			const currentPosts = this.props.posts.slice(indexOfFirstPost, indexOfLastPost)
			console.log('if')
			return (
				<div>
					{currentPosts.map((post,i) => {
						return(
							<Link to={`/sale/${post._id}`} onClick={this.changeCurrentPost.bind(null, post)} >
								<EntrySale post={post} key={i}/>
							</Link>
						)
					})}
				</div>
			)	
		} else {
			console.log('else')
			return (
	
				<ClickSale currentPost={this.state.currentPost}  changeComments={this.changeComments} changeView={this.changeView}/>

			)
		}
	}

	render() {
		const pageNumbers= [];
		for (let i = 1; i <= Math.ceil(this.props.posts.length / this.state.postsPerPage); i++) {
			pageNumbers.push(i)
		}

		const renderPageNumbers = pageNumbers.map(number => {
          return (
            <li className="page-per-numbers" key={number} id={number} onClick={this.handleClickPage}>
              {number}
            </li>
          );
        });
		return(
			<div>
				<div className="SeachBar-Sort">
					<SeachBar/>
					<FilterBox/>
					<Sort/>
				</div>
				<div>
					{this.showComponent()}
				</div>
				<ul className="page-numbers" >{renderPageNumbers}</ul>
			</div>
		)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Sale)