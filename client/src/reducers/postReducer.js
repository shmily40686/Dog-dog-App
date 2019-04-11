import {ADD_POST, REMOVE_POST,ADD_MANY_POSTS,CHANGE_POSTS} from '../action/changePost.js'
import { ADD_COMMENT } from '../action/addComment.js'

function postReducer ( state=[], action ) {
	switch (action.type) {
		case ADD_COMMENT:
			return state.map(post => {
				if (post.id === action.postId) {
					return {
						...post,
						comments: post.comments.concat(action.comment)
					};
				}
				return post;
			})
		case ADD_POST:
			return [...state, action.post]
		case ADD_MANY_POSTS:
			return state.concat(action.posts)
		case CHANGE_POSTS:
			return action.posts
		case REMOVE_POST:
			return  state.filter(post => post._id !== action.post._id)
		default:
			return state
	}

}

export default postReducer
