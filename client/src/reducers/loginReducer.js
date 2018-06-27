import { CHANGE_LOGINBOX } from '../action/changeLocation.js'

function logInReducer (state = false, action) {
	switch (action.type) {
		case CHANGE_LOGINBOX:
			return !action.logInBox
		default:
			return state
	}
}

export default logInReducer