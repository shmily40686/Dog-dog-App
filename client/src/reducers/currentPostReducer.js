import { CHANGE_CURRENT_POSTS } from '../action/changeCurrentPost.js'

function currentPostsReducer (state = "", action) {
	switch (action.type) {
		case CHANGE_CURRENT_POSTS:
			return action.post
		default:
			return state
	}
}

export default currentPostsReducer