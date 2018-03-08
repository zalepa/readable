import React, {Component} from 'react';
import EditCommentForm from '../ui/EditCommentForm';
import {connect} from 'react-redux';
import {retrieveComment, updateComment} from '../../actions/comments';
import {retrievePost} from "../../actions/posts";

class CommentEditPage extends Component {
    componentWillMount() {
        this.props.fetchComment(this.props.commentId);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.comment.parentId) {
            this.props.fetchPost(nextProps.comment.parentId)
        }
    }


    render() {
        return <EditCommentForm {...this.props} />
    }
}

function stateToProps(state, ownProps) {
    const id = ownProps.match.params.id;
    return {
        commentId: id,
        comment: state.comments.filter(c => c.id === id)[0],
        post: state.posts[0]
    }
}

function dispatchToProps(dispatch) {
    return {
        fetchPost: (id) => dispatch(retrievePost(id)),
        fetchComment: (id) => dispatch(retrieveComment(id)),
        onSubmit: (comment, post) => {
            dispatch(updateComment(comment, post));
        }
    }
}

export default connect(stateToProps, dispatchToProps)(CommentEditPage);