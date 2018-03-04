import { REPLACE_CATEGORIES } from '../actions/categories';
/*
    Posts are stored in a flat array of items.
*/
function categoryReducer(state = [], action) {
    switch(action.type) {
        case REPLACE_CATEGORIES:
            return action.categories;
        default:
            return state;
    }
}

export default categoryReducer;