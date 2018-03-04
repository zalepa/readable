import * as API from "../utils/api";

export const REPLACE_COMMENTS = 'REPLACE_COMMENTS';

export function fetchComments(postId) {
    return function (dispatch) {
        API.Comments.all(postId, comments => {
            dispatch({
                type: REPLACE_COMMENTS,
                comments
            });
        });
    }
}