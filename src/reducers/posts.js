import {SORT_POSTS, REPLACE_POSTS, ADD_POST, UPDATE_POST, REMOVE_POST} from '../actions/posts';

/*
    Posts are stored in a flat array of items.
*/
function postReducer(state = [], action) {
    switch (action.type) {
        case REPLACE_POSTS:
            return action.posts;
        case ADD_POST:
            return [...state, action.post];
        case UPDATE_POST:
            return state.map(post => (post.id === action.post.id ? action.post : post))
        case REMOVE_POST:
            return state.filter(post => (post.id === action.id ? null : post));
        case SORT_POSTS:
            if (action.dir === 'DESC')
                return state.slice().sort((a,b) => b[action.key] - a[action.key])
            else
                return state.slice().sort((a,b) => a[action.key] - b[action.key])
        default:
            return state;
    }
}

export default postReducer;