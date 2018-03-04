import React from 'react';
import PostListItem from './PostListItem.jsx';

const PostView = ({post}) => {
    return (
        <div className="new-post-form">
            <h3>Post</h3>
            <PostListItem {...post} />
            <h3>Comments</h3>
            <p>...TODO...</p>
        </div>
    )
}

export default PostView;