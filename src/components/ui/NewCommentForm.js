import React, {Component} from 'react';
import "./forms.css";

class NewCommentForm extends Component {

    state = {
        comment: {
            body: '', author: '', parentId: this.props.parentId
        }
    };

    handleChange = (event) => {
        event.preventDefault();
        const target = event.target;
        this.setState(oldState => {
            return {...oldState, comment: {...oldState.comment, [target.id]: target.value}}
        })
    };

    handleSubmit = (e) => {
        e.preventDefault();
        if (this.props.onSubmit) {
            this.props.onSubmit(this.state.comment);
        }
    };

    render() {
        return (
            <div className="form new-comment-form">
                <h1>New Comment</h1>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-control">
                        <label htmlFor="body">Body: </label>
                        <textarea name="body" id="body" cols="30" rows="10" value={this.state.comment.body}
                                  onChange={this.handleChange}></textarea>
                    </div>
                    <div className="form-control">
                        <label htmlFor="author">Author: </label>
                        <input type="text" name="author" id="author" value={this.state.comment.author}
                               onChange={this.handleChange}/>
                    </div>
                    <div className="form-control">
                        <input type="submit" value="Save"/>
                    </div>
                </form>
            </div>
        )
    }

}

export default NewCommentForm;