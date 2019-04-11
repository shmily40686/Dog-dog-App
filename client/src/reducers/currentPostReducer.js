import { CHANGE_CURRENT_POST } from '../action/changeCurrentPost.js'
import { ADD_COMMENT } from '../action/addComment.js'

function currentPostReducer (state = "", action) {
	console.log('state: ', state)
	switch (action.type) {
		case CHANGE_CURRENT_POST:
			return action.post
		case ADD_COMMENT:
			return {
				...state,
				comments: state.comments.concat(action.comment)
			}
		default:
			return state
	}
}

export default currentPostReducer