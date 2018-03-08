import React, {Component} from 'react';
import "./forms.css";

class EditPostForm extends Component {
    state = {
        post: {
            title: '', body: '', author: '', category: 'react'
        }
    };

    componentWillReceiveProps(nextProps) {
        if (nextProps.post) {
            this.setState({
                post: nextProps.post
            });
        }
    }

    handleChange = (event) => {
        event.preventDefault();
        const target = event.target;
        this.setState(oldState => {
            return {...oldState, post: {...oldState.post, [target.id]: target.value}}
        })
    };

    handleSubmit = (e) => {
        e.preventDefault();
        if (this.props.onSubmit) {
            this.props.onSubmit(this.state.post);
        }
    };

    render() {
        return (
            <div className="new-post-form">
                <h1>Edit Post</h1>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-control">
                        <label htmlFor="title">Title: </label>
                        <input type="text" id="title" value={this.state.post.title} onChange={this.handleChange}/>
                    </div>
                    <div className="form-control">
                        <label htmlFor="body">Body: </label>
                        <textarea name="body" id="body" cols="30" rows="10" value={this.state.post.body}
                                  onChange={this.handleChange}></textarea>
                    </div>
                    <div className="form-control">
                        <label htmlFor="author">Author: </label>
                        <input type="text" name="author" id="author" value={this.state.post.author}
                               onChange={this.handleChange}/>
                    </div>
                    <div className="form-control">
                        <label htmlFor="category">Category: </label>
                        <select name="category" id="category" value={this.state.post.category}
                                onChange={this.handleChange}>
                            <option value="react">React</option>
                            <option value="redux">Redux</option>
                            <option value="udacity">Udacity</option>
                        </select>
                    </div>
                    <div className="form-control">
                        <input type="submit" value="Update"/>
                    </div>
                </form>
            </div>
        )
    }
}

export default EditPostForm;