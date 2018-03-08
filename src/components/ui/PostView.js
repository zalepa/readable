import React from 'react';
import PostListItem from './PostListItem.jsx';
import Comment from './Comment'

const PostView = ({post, comments, onPostVote, onCommentVote, onPostEdit, onCommentEdit, onPostDelete, onCommentDelete}) => {

    return (
        <div className="new-post-form">
            <h3>Post</h3>
            <PostListItem {...post} onVote={onPostVote} onDelete={onPostDelete} />
            <h3>Comments</h3>
            {comments.map(comment => (
                <Comment key={comment.id} {...comment} onDelete={onCommentDelete} onVote={onCommentVote} />
            ))}
            {post && (
                <a href={`/${post.category}/${post.id}/comments/new`}>New Comment</a>
            )}
        </div>
    )
}

export default PostView;