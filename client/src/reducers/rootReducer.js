import { combineReducers } from 'redux'
import postReducer from './postReducer'
import userReducer from './userReducer'
import locationReducer from './locationReducer'
import logInReducer from './loginReducer'
import currentUserReducer from './currentUserReducer'

const rootReducer = combineReducers({
	user: currentUserReducer,
	users: userReducer,
	posts: postReducer,
	location: locationReducer,
	login: logInReducer
})

export default rootReducer