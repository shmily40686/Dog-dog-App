import { CHANGE_LOCATION } from '../action/changeLocation.js'

function locationReducer (state = "", action) {
	switch (action.type) {
		case CHANGE_LOCATION:
			return action.location
		default:
			return state
	}
}

export default locationReducer