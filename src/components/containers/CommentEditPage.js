import React, {Component} from 'react';
import EditCommentForm from '../ui/EditCommentForm';
import {connect} from 'react-redux';
import {retrieveComment, updateComment} from '../../actions/comments';

class CommentEditPage extends Component {
    componentWillMount() {
        this.props.fetchComment(this.props.commentId);
    }
    render() {
        return <EditCommentForm {...this.props} />
    }
}

function stateToProps(state, ownProps) {
    const id = ownProps.match.params.id;
    return {
        commentId: id,
        comment: state.comments.filter(c => c.id === id)[0]
    }
}

function dispatchToProps(dispatch) {
    return {
        fetchComment: (id) => dispatch(retrieveComment(id)),
        onSubmit: (comment) => {
            dispatch(updateComment(comment));
        }
    }
}

export default connect(stateToProps, dispatchToProps)(CommentEditPage);