import * as API from "../utils/api";
import {ADD_POST, UPDATE_POST} from "./posts";
import {push, go } from "react-router-redux";

export const REPLACE_COMMENTS = 'REPLACE_COMMENTS';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';
export const UPDATE_COMMENT = 'UPDATE_COMMENT';
export const ADD_COMMENT = 'ADD_COMMENT';

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

export function retrieveComment(id) {
    return function (dispatch) {
        API.Comments.get(id, comment => {
            dispatch({
                type: ADD_COMMENT,
                comment
            });
        });
    }
}

export function updateComment({id, title, body}) {
    return function (dispatch) {
        API.Comments.update({id, title, body}, persistedComment => {
            dispatch({
                type: UPDATE_COMMENT,
                comment: persistedComment
            });
            dispatch(go(-1))
        });
    }
}

export function createComment(comment) {
    return function (dispatch) {
        API.Comments.create(comment, persistedComment => {
            dispatch({
                type: ADD_COMMENT,
                comment: persistedComment
            });
            dispatch(go(-1));
        });
    }
}