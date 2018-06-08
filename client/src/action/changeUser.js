const ADD_USER = 'ADD_USER';

function addUser (user) {
	return {
		type: ADD_USER,
		user: user
	}
}