import { VOTE_POST, REPLACE_POSTS, ADD_POST, UPDATE_POST, REMOVE_POST } from '../actions/posts';
/* 
    Posts are stored in a flat array of items.
*/
 function postReducer(state = [], action) {
    switch(action.type) {
        case REPLACE_POSTS:
            return action.posts;
        case ADD_POST:
            return [...state, action.post]; // naive: risk of duplicates.
        case UPDATE_POST:
            return state.map(post => (post.id === action.post.id ? action.post : post))
        case REMOVE_POST:
            return state.filter(post => (post.id === action.id ? null : post))
        default:
            return state;
    }
}

export default postReducer;