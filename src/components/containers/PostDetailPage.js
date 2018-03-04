import React, {Component} from 'react';
import PostView from '../ui/PostView';
import {connect} from 'react-redux';
import {retrievePost} from '../../actions/posts';

class PostDetailPage extends Component {
    componentDidMount() {
        this.props.fetchPost(this.props.postId);
    }

    render() {
        return <PostView {...this.props} />
    }
}

function stateToProps(state, ownProps) {
    const id = ownProps.match.params.id;
    return {
        postId: id,
        post: state.posts.filter(p => p.id === id)[0]
    }
}

function dispatchToProps(dispatch) {
    return {
        fetchPost: (id) => dispatch(retrievePost(id))
    }
}

export default connect(stateToProps, dispatchToProps)(PostDetailPage);