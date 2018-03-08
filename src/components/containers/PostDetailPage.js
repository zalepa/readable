import React, {Component} from 'react';
import PostView from '../ui/PostView';
import {connect} from 'react-redux';
import {deletePost, retrievePost, votePost} from '../../actions/posts';
import {fetchComments, deleteComment, voteComment } from "../../actions/comments";

class PostDetailPage extends Component {
    componentDidMount() {
        this.props.fetchPost(this.props.postId);
        this.props.fetchComments(this.props.postId);
    }

    render() {
        if (this.props.post)
            return <PostView {...this.props} />
        else
            return <div></div>
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
        fetchComments: (postId) => dispatch(fetchComments(postId)),
        onPostVote: (id, type) => dispatch(votePost(id, type)),
        onPostDelete: (id) => dispatch(deletePost(id)), // BUG: doesn't redirect
        onCommentDelete: (id) => dispatch(deleteComment(id)),
        onCommentVote: (id, type) => dispatch(voteComment(id, type)),
    }
}

export default connect(stateToProps, dispatchToProps)(PostDetailPage);