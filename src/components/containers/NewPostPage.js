import uuidv1 from 'uuid';
import { connect } from 'react-redux';
import NewPostForm from '../ui/NewPostForm.jsx';
import { createPost } from "../../actions/posts";

function dispatchToProps(dispatch) {
    return {
        onSubmit: (post) => {
            post.id = uuidv1();
            post.timestamp = +new Date();
            dispatch(createPost(post))
        }
    }
}

export default connect(null, dispatchToProps)(NewPostForm);