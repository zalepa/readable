import React from 'react';
import PostListItem from './PostListItem.jsx';

const PostListing = (props) => {
    return (
        <div>
            <div className="sorting">
                <strong>Sort:</strong>{" "}
                <button name="timestamp" data-dir="DESC" onClick={props.onSort}>↓Date</button>{" "}
                <button name="timestamp" data-dir="ASC"  onClick={props.onSort}>↑Date</button>{" "}
                <button name="voteScore" data-dir="DESC" onClick={props.onSort}>↓Score</button>{" "}
                <button name="voteScore" data-dir="ASC"  onClick={props.onSort}>↑Score</button>
            </div>
            {props.posts.map(post => (
                <PostListItem key={post.id} {...post}
                              onDelete={props.onDelete}
                              onVote={props.onVote} />
            ))}
        </div>
    )
}

export default PostListing;