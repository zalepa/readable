import * as API from "../utils/api";
import {UPDATE_POST} from "./posts";

export const REPLACE_COMMENTS = 'REPLACE_COMMENTS';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';
export const UPDATE_COMMENT = 'UPDATE_COMMENT';

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
export function deleteComment(id) {
    return function (dispatch) {
        API.Comments.delete(id, comment => {
            dispatch({
                type: REMOVE_COMMENT,
                id: comment.id
            });
        });
    }
}

export function voteComment(id, type) {
    return function(dispatch) {
        API.Comments.vote(id, type, persistedComment => {
            dispatch({
                type: UPDATE_COMMENT,
                comment: persistedComment
            })
        })
    }
}