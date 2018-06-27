import React from 'react'
import { connect } from 'react-redux'
import { addPosts, changePosts, removePost} from '../../action/changePost.js'
import { addUsers } from '../../action/changeUser.js'

const mapStateToProps = (state, props) => {

	return {
		users: state.users,
		posts: state.posts,
		user: state.user
	}
}

const mapDispatchToProps = (dispatch, props) => {
	return {

		changePostsToStore: function (location) {
			dispatch(removePost(location))
		},

		addPostsToStore: function (posts) {
			dispatch(addPosts(posts))
		},
		addUsersToStore: function (users) {
			dispatch(addUsers(users))
		},
		changePostsToStore: function (posts) {
			dispatch(changePosts(posts))
		}
	}
}

class UserPage extends React.Component {

	componentDidMount () {
		var app = this;

		fetch('http://localhost:3000/api/posts')
			.then(res => {
				console.log('res: ' ,res)
				return res.json()
			}).then((data) => {
				app.props.addPostsToStore(data)
			})
			.catch(function (err) {
				console.error('error getting data: ', err)
			});

		fetch('http://localhost:3000/api/users')
			.then(res => {
				console.log('res: ' ,res)
				return res.json()
			}).then((data) => {
				app.props.addUsersToStore(data)
			})
			.catch(function (err) {
				console.error('error getting data: ', err)
			});
	}

	render() {
		return(
			<div className="UserPage">
				<div>user's post</div>

			</div>
		)
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(UserPage)