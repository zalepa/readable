import React from 'react';
import PostListItem from './PostListItem.jsx';
import Comment from './Comment'

const PostView = ({post, comments}) => {
    return (
        <div className="new-post-form">
            <h3>Post</h3>
            <PostListItem {...post} />
            <h3>Comments</h3>
            <ul>
                {comments.map(comment => (
                    <Comment key={comment.id} {...comment} />
                ))}
            </ul>
        </div>
    )
}

export default PostView;