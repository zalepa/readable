import React, {Component} from 'react';

class EditCommentForm extends Component {
    state = {
        comment: {
            body: ''
        }
    };

    componentWillReceiveProps(nextProps) {
        if (nextProps.comment) {
            this.setState({
                comment: nextProps.comment
            });
        }
    }

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
            <div className="new-comment-form">
                <h1>Edit Comment</h1>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-control">
                        <label htmlFor="body">Body: </label>
                        <textarea name="body" id="body" cols="30" rows="10" value={this.state.comment.body}
                                  onChange={this.handleChange}></textarea>
                    </div>

                    <div className="form-control">
                        <input type="submit" value="Update"/>
                    </div>
                </form>
            </div>
        )
    }
}

export default EditCommentForm;