import { connect } from 'react-redux';
import PostListing from '../ui/PostListing.jsx';

function stateToProps(state, ownProps) {
    return {
        posts: state.posts
    }
}

export default connect(stateToProps)(PostListing);