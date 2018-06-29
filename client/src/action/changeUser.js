export const ADD_USER = 'ADD_USER';
export const ADD_MANY_USERS = 'ADD_MANY_USERS';
export const CHANGE_USERS = 'CHANGE_USERS';

export function addUser (user) {
	return {
		type: ADD_USER,
		user: user
	}
}

export function addUsers (users) {
	return {
		type: ADD_MANY_USERS,
		users: users
	}
}

export const changeUsers = function (users) {
	return {
		type: CHANGE_USERS,
		users: users

	}
}