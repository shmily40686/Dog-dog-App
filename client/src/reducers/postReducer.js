import {ADD_POST, REMOVE_POST,ADD_MANY_POSTS,CHANGE_POSTS} from '../action/changePost.js'

function postReducer ( state=[], action ) {
	switch (action.type) {
		case ADD_POST:
			return [...state, action.post]
		case ADD_MANY_POSTS:
			return state.concat(action.posts)
		case CHANGE_POSTS:
			state = [];
			return state.concat(action.posts)
		case REMOVE_POST:
			return  state.filter(post => post._id !== action.post._id)
		default:
			return state
	}

}

export default postReducer