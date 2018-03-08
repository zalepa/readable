import React from 'react';
import './PostListItem.css';

const PostListItem = ({title, id, author, body, timestamp, category, voteScore, commentCount, onDelete, onVote}) => {

    const formattedDate = new Date(timestamp).toLocaleDateString();

    return (
        <div className="post-list-item">
            <div className="title">
                <span className="voting">
                    [<button onClick={() => onVote(id, 'upVote')}>+</button>]
                    [{voteScore}]
                    [<button onClick={() => onVote(id, 'downVote')}>-</button>]
                </span> <a href={`/${category}/${id}`}>{title}</a>
            </div>
            <div className="details">
                by {author} on {formattedDate} in <a href={`/${category}`}>#{category}</a>
                {" "}[{commentCount} comments]
                [<a href={`/${category}/${id}/edit`}>edit</a>]
                [
                <button onClick={() => onDelete(id)}>delete</button>
                ]
            </div>
            <div className="body">
                {body}
            </div>
        </div>
    )


}

export default PostListItem;