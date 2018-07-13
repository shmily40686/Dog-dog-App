import { CHANGE_CURRENT_POST } from '../action/changeCurrentPost.js'

function currentPostReducer (state = "", action) {
	switch (action.type) {
		case CHANGE_CURRENT_POST:
			return action.post
		default:
			return state
	}
}

export default currentPostReducer