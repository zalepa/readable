import { REPLACE_COMMENTS} from '../actions/comments';
/*
    Posts are stored in a flat array of items.
*/
function commentsReducer(state = [], action) {
    switch(action.type) {
        case REPLACE_COMMENTS:
            return action.comments;
        default:
            return state;
    }
}

export default commentsReducer;