import React, { Component } from 'react';
import uuidv1 from 'uuid';
import {connect} from 'react-redux';
import {createComment} from "../../actions/comments";
import NewCommentForm from "../ui/NewCommentForm";
import {retrievePost} from "../../actions/posts";

class CommentEditPage extends Component {

  componentDidMount() {
    this.props.fetchPost(this.props.parentId)
  }

  render() {
    return <NewCommentForm {...this.props} />
  }
}

function dispatchToProps(dispatch) {
  return {
    fetchPost: (id) => dispatch(retrievePost(id)),
    onSubmit: (comment, post) => {
      const referrer = `/${post.category}/${post.id}`;
      comment.id = uuidv1();
      comment.timestamp = +new Date();
      dispatch(createComment(comment, referrer))
    }
  }
}

function stateToProps(state, ownProps) {
  return {
    parentId: ownProps.match.params.postId,
    post: state.posts.filter(p => p.id === ownProps.match.params.postId)[0]
  }
}

export default connect(stateToProps, dispatchToProps)(CommentEditPage);