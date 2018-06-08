import { combineReducers } from 'redux'
import { postReducer } from './postReducer.js'
import { userReducer } from './userReducer.js'
​
const rootReducer = combineReducers({
  user: userReducer,
  post: postReducer
})
​
export default rootReducer