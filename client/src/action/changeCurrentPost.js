export const CHANGE_CURRENT_POST = 'CHANGE_CURRENT_POST';

export function changeCurrentPost (post) {
	return {
		type: CHANGE_CURRENT_POST,
		post: post
	}
}