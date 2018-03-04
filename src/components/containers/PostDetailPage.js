import React, {Component} from 'react';
import PostView from '../ui/PostView';
import {connect} from 'react-redux';
import {retrievePost} from '../../actions/posts';
import {fetchComments} from "../../actions/comments";

class PostDetailPage extends Component {
    componentDidMount() {
        this.props.fetchPost(this.props.postId);
        this.props.fetchComments(this.props.postId);
    }

    render() {
        return <PostView {...this.props} />
    }
}

function stateToProps(state, ownProps) {
    const id = ownProps.match.params.id;
    return {
        postId: id,
        post: state.posts.filter(p => p.id === id)[0],
        comments: state.comments.filter(c => c.parentId === id)
    }
}

function dispatchToProps(dispatch) {
    return {
        fetchPost: (id) => dispatch(retrievePost(id)),
        fetchComments: (postId) => dispatch(fetchComments(postId))
    }
}

export default connect(stateToProps, dispatchToProps)(PostDetailPage);