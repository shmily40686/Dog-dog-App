export const ADD_COMMENT = 'ADD_COMMENT';

export function addComment (postId, comment) {
	return {
		type: ADD_COMMENT,
		postId: postId,
		comment: comment
	}
}