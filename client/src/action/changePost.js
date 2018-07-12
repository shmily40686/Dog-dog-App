export const ADD_POST = 'ADD_POST';
export const REMOVE_POST = 'REMOVE_POST';
export const ADD_MANY_POSTS = 'ADD_MANY_POSTS';
export const CHANGE_POSTS = 'CHANGE_POSTS';

export const addPost = function (post) {
	return {
		type: ADD_POST,
		post: post

	}
}

export const addPosts = function (posts) {
	return {
		type: ADD_MANY_POSTS,
		posts: posts

	}
}

export const changePosts = function (posts) {
	return {
		type: CHANGE_POSTS,
		posts: posts

	}
}


export const removePost = function (post) {
	return {
		type: REMOVE_POST,
		post: post

	}
}