import React, {Component} from 'react';
import EditPostForm from '../ui/EditPostForm';
import {connect} from 'react-redux';
import {retrievePost, updatePost} from '../../actions/posts';

class PostEditPage extends Component {
    componentWillMount() {
        this.props.fetchPost(this.props.postId);
    }

    render() {
        return <EditPostForm {...this.props} />
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
        fetchPost: (id) => dispatch(retrievePost(id)),
        onSubmit: (post) => {
            dispatch(updatePost(post))
        }
    }
}

export default connect(stateToProps, dispatchToProps)(PostEditPage);