export const CHANGE_CURRENT_POSTS ='CHANGE_CURRENT_POSTS';

export const changeCurrentPosts = function (post) {
	return {
		type: CHANGE_CURRENT_POSTS,
		post: post

	}
}