import { connect } from 'react-redux';
import NewPostForm from '../ui/NewPostForm.jsx';
import { createPost } from "../../actions/posts";

function dispatchToProps(dispatch) {
    return {
        onSubmit: (post) => dispatch(createPost(post))
    }
}

export default connect(null, dispatchToProps)(NewPostForm);