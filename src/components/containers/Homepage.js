import {connect} from 'react-redux';
import PostListing from '../ui/PostListing.jsx';
import {deletePost} from "../../actions/posts";

function stateToProps(state) {
    return {
        posts: state.posts
    }
}

function dispatchToProps(dispatch) {
    return {
        onDelete: (id) => {
            dispatch(deletePost(id))
        }
    }
}

export default connect(stateToProps, dispatchToProps)(PostListing);