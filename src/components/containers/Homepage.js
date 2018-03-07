import React, {Component} from 'react';
import {connect} from 'react-redux';
import PostListing from '../ui/PostListing.jsx';
import {sortPosts, deletePost, fetchPosts, votePost} from "../../actions/posts";
import {fetchCategories} from '../../actions/categories';

class Homepage extends Component {
    componentDidMount = () => {
        this.props.fetchPosts('all');
        this.props.fetchCategories();
    };

    render() {
        return (
            <div>
                <div className="category-chooser">
                    Categories:
                    {this.props.categories.map(category => (
                        <a key={category.name}
                           href={`/${category.path}`}>{category.name}</a>
                    ))}
                </div>
                <PostListing {...this.props}/>
            </div>
        )
    }
}

function stateToProps(state) {
    return {
        posts: state.posts,
        categories: state.categories
    }
}

function dispatchToProps(dispatch) {
    return {
        onDelete: (id) => dispatch(deletePost(id)),
        fetchPosts: (category) => dispatch(fetchPosts(category)),
        fetchCategories: () => dispatch(fetchCategories()),
        onVote: (id, type) => dispatch(votePost(id, type)),
        onSort: (e) => {
            e.preventDefault();
            dispatch(sortPosts(e.target.name, e.target.dataset.dir));
        }
    }
}

export default connect(stateToProps, dispatchToProps)(Homepage);