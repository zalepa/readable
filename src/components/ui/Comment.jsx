import React from 'react';

const Comment = (props) => {
    return (
        <div className="comment">
            <div className="title">
                <span className="voting">
                    [<button onClick={() => props.onVote(props.id, 'upVote')}>+</button>]
                    [{props.voteScore}]
                    [<button onClick={() => props.onVote(props.id, 'downVote')}>-</button>]
                </span>{" "}
                {props.author} said (on {props.timestamp}):
            </div>
            <div className="body">
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