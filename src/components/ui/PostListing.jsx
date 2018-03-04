import React from 'react';
import PostListItem from './PostListItem.jsx';

const PostListing = (props) => {
    return (
        <div>
            {props.posts.map(post => (
                <PostListItem key={post.id} {...post} onDelete={props.onDelete} onVote={props.onVote} />
            ))}
        </div>
    )
}

export default PostListing;