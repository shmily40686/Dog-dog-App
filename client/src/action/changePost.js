const ADD_POST = 'ADD_POST';
const REMOVE_POST = 'REMOVE_POST';

function addPost (post) {
	return {
		type: ADD_POST,
		post : post

	}
}

function removePost (post) {
	return {
		type: REMOVE_POST,
		post : post

	}
}