import { ADD_USER, ADD_MANY_USERS, CHANGE_USERS } from '../action/changeUser.js'

function userReducer (state=[], action) {
	switch (action.type) {
		case ADD_USER:
			return [...state, action.user]
		case ADD_MANY_USERS:
			return state.concat(action.users)
		case CHANGE_USERS:
			return action.users
		default:
			return state
	}
}

export default userReducer