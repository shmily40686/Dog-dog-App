import { CHANGE_CURRENT_USER } from '../action/changeCurrentUser.js'

function currentUserReducer (state = "", action) {
	switch (action.type) {
		case CHANGE_CURRENT_USER:
			return action.user
		default:
			return state
	}
}

export default currentUserReducer