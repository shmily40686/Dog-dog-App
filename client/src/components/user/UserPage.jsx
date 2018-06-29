import React from 'react'
import { connect } from 'react-redux'
import { addPosts, changePosts, removePost} from '../../action/changePost.js'
import { addUsers, changeUsers} from '../../action/changeUser.js'
import axios from 'axios'
import EditPost from './EditPost.jsx'

const mapStateToProps = (state, props) => {

	return {
		users: state.users,
		posts: state.posts,
		user: state.user,
		login: state.login
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
		changeUsersToStore: function (users) {
			dispatch(changeUsers(users))
		}
	}
}

class UserPage extends React.Component {

	constructor(props) {
	  super(props);
	  this.state = {
	  	currentPost: null,
	  	id: null,
	  	editPost: false
	  }

	 this.renderUserPost = this.renderUserPost.bind(this);
	 this.deletePost = this.deletePost.bind(this);
	 this.editPost = this.editPost.bind(this);
	}

	editPost (post) {
 	 	this.setState({
 	 		currentPost: post,
 	 		editPost: true
 	 	})
	}

	deletePost (post) {
		this.setState({
			id: post._id
		}, function () {
			var app = this;
		axios({
	  		method: 'post',
	  		url: "http://localhost:3000/api/deletePosts",
	  		data:{
	  			id:  app.state.id,
	  			user: app.props.user
	  		}
	  	})
		  .then(function (response) {
		    console.log("deletePost ", response);
		    var newPost = app.props.posts.filter((post) => {
		    	return post._id !== app.state.id
		    })
		    app.props.changePostsToStore(newPost)

		  })
		  .catch(function (error) {
		    console.log(error);
		  });
		})
		
	}

	componentDidMount () {
		if (this.props.login === false) {
			this.props.history.push('/login')
		} else {
			var app = this;
		fetch('http://localhost:3000/api/posts')
			.then(res => {
				console.log('res: ' ,res)
				return res.json()
			}).then((data) => {
				app.props.changePostsToStore(data)
			})
			.catch(function (err) {
				console.error('error getting data: ', err)
			});

		fetch('http://localhost:3000/api/users')
			.then(res => {
				console.log('res: ' ,res)
				return res.json()
			}).then((data) => {
				app.props.changeUsersToStore(data)
			})
			.catch(function (err) {
				console.error('error getting data: ', err)
			});
		}
		
	}


	renderUserPost () {
		if (this.props.login == false) {
			return (
				<h1>Lorading</h1>
			)
		} else if (this.state.editPost) {
				return(
					<EditPost post={this.state.currentPost}/>
					)
		} else {
			var currentUser = this.props.users.filter ( (user) => {
				return user.userName === this.props.user}
			)

			if (currentUser.length > 0) {
				var UserListForSale = currentUser[0].listForSale
				var postList = [];
				for (var i = 0; i < UserListForSale.length; i++) {
					for ( var j = 0; j < this.props.posts.length; j++) {
						if (this.props.posts[j]._id === UserListForSale[i]) {
							postList.push(this.props.posts[j])
						}
					}
				}
			 return (
			 	<div>
			 		{postList.map((post,i) => {
			 			return(
			 				<div className='post' key={i}>
			 						<h3 >{post.title}</h3>
									<img src={post.photo[0]} style={{width:'150px'}}/>
									<div style={{width:'100px'}}>{post.type}</div>
									<div >{post.info.age.year} year<span>{post.info.age.month} month</span></div>
									<div >{post.location.city}<span>{post.location.state}</span></div>
									<div >{post.info.price.fullPrice}</div>
									<div >{post.info.sex}</div>
									<div >{post.info.type}</div>
									<div >{post.info.size}</div>
									<div >{post.view}</div>
									<button onClick={() => this.deletePost(post)}>Delete</button>
									<button onClick={() => this.editPost(post)}>Edit</button>
			 				</div>
			 			)
			 		})}
			 	</div>
			 )
			}
		}
	}

	render() {
		return(
			<div className="UserPage">
				<div>{this.renderUserPost()}</div>

			</div>
		)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(UserPage)