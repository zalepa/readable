import React from 'react';
import './PostListItem.css';

const PostListItem = ({title, id, author, timestamp, category, voteScore, commentCount, onDelete}) => {

    const formattedDate = new Date(timestamp).toLocaleDateString();

    return (
        <div className="post-list-item">
            <div className="title">
                <span className="voting">[<button>+</button>] [{voteScore}] [<button>-</button>] </span>
                <a href={`/${category}/${id}`}>{title}</a>
            </div>
            <div className="details">
                by {author} on {formattedDate} in
                <a href={`/${category}`}>#{category}</a>
                [{commentCount} comments]
                [<a href={`/${category}/${id}/edit`}>edit</a>]
                [<button onClick={() => onDelete(id)}>delete</button>]
            </div>
        </div>
    )
}

export default PostListItem;