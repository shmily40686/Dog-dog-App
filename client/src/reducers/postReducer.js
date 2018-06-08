import {ADD_POST, REMOVE_POST} from '../action/changePost.js'

function postReducer ( state=[], action ) {
	switch (action.type) {
		case ADD_POST:
			return [...state, action.post]
		case REMOVE_POST:
			return  state.filter(post => post._id !== action.post._id)
		default:
			return state
	}

}

export default postReducer