import React from 'react';
import "./Comment.css";

const Comment = (props) => {
    const formattedDate = new Date(props.timestamp).toLocaleDateString();
    return (
        <div className="comment">
            <div className="title">
                <span className="voting">
                    [<button onClick={() => props.onVote(props.id, 'upVote')}>+</button>]
                    [{props.voteScore}]
                    [<button onClick={() => props.onVote(props.id, 'downVote')}>-</button>]
                </span>{" "}
                On {formattedDate}, {props.author} said:
            </div>
            <div className="comment-body">
                {props.body}
                <div>
                    [<a href={`/comments/${props.id}/edit`}>edit</a>]
                    [<button onClick={() => props.onDelete(props.id)}>delete</button>]
                </div>
            </div>
        </div>
    )
}

export default Comment;