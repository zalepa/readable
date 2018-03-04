import React, {Component} from 'react';
import {connect} from 'react-redux';
import PostListing from '../ui/PostListing.jsx';
import {deletePost, fetchPosts} from "../../actions/posts";

class Homepage extends Component {
    componentDidMount = () => {
        this.props.fetchPosts();
    };

    render() {
        return <PostListing {...this.props}/>
    }
}

function stateToProps(state) {
    return {
        posts: state.posts
    }
}

function dispatchToProps(dispatch) {
    return {
        onDelete: (id) => {
            dispatch(deletePost(id))
        },
        fetchPosts: () => dispatch(fetchPosts())
    }
}

export default connect(stateToProps, dispatchToProps)(Homepage);