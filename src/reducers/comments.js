import { ADD_COMMENT, REPLACE_COMMENTS, REMOVE_COMMENT, UPDATE_COMMENT } from '../actions/comments';

/*
    Posts are stored in a flat array of items.
*/
function commentsReducer(state = [], action) {
    switch(action.type) {
        case ADD_COMMENT:
            return [...state, action.comment];
        case REPLACE_COMMENTS:
            return action.comments;
        case REMOVE_COMMENT:
            return state.filter(comment => (comment.id === action.id ? null : comment));
        case UPDATE_COMMENT:
            console.log(action.comment)
            console.log(state)
            return state.map(comment => (comment.id === action.comment.id ? action.comment : comment))
        default:
            return state;
    }
}

export default commentsReducer;