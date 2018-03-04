import * as API from '../utils/api';

export const REPLACE_POSTS = 'REPLACE_POSTS';
export const ADD_POST = 'ADD_POST';
export const UPDATE_POST = 'REPLACE_POST';
export const REMOVE_POST = 'REMOVE_POST';

export function fetchPosts() {
    return function (dispatch) {
        API.Posts.all(posts => {
            dispatch({
                type: REPLACE_POSTS,
                posts
            });
        });
    }
}

export function createPost(post) {
    return function (dispatch) {
        API.Posts.create(post, persistedPost => {
            dispatch({
                type: ADD_POST,
                post: persistedPost
            });
        });
    }
}

export function deletePost(id) {
    return function (dispatch) {
        API.Posts.delete(id, post => {
            dispatch({
                type: REMOVE_POST,
                id: post.id
            });
        });
    }
}

export function retrievePost(id) {
    return function (dispatch) {
        API.Posts.get(id, post => {
            dispatch({
                type: ADD_POST,
                post
            });
        });
    }
}

export function updatePost(id, title, body) {
    return function (dispatch) {
        API.Posts.update(id, title, body, post => {
            dispatch({
                type: UPDATE_POST,
                post
            });
        });
    }
}