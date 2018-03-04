import postReducer from './posts';
import categoryReducer from "./categories";
import commentsReducer from './comments';

export default {
    posts: postReducer,
    categories: categoryReducer,
    comments: commentsReducer
};