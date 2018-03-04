import React from 'react';

const Comment = (props) => {
    return (
        <li className="comment">
            {props.author} said (on {props.timestamp}): {props.body}
        </li>
    )
}

export default Comment;