import { combineReducers } from 'redux'
import postReducer from './postReducer'
import userReducer from './userReducer'
import locationReducer from './locationReducer'
import logInReducer from './loginReducer'
import currentUserReducer from './currentUserReducer'
import currentPostReducer from './currentPostReducer'

const rootReducer = combineReducers({
	user: currentUserReducer,
	users: userReducer,
	currentPost: currentPostReducer,
	posts: postReducer,
	location: locationReducer,
	login: logInReducer
})

export default rootReducer