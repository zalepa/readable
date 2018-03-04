import React, {Component} from 'react';
import {connect} from 'react-redux';
import PostListing from '../ui/PostListing.jsx';
import {deletePost, fetchPosts} from "../../actions/posts";
import {fetchCategories} from '../../actions/categories';

class CategoryPage extends Component {
    componentDidMount = () => {
        this.props.fetchPosts(this.props.activeCategory);
        this.props.fetchCategories();
    };

    render() {
        return (
            <div>
                <div className="category-chooser">
                    Categories:
                    {this.props.categories.map(category => (
                        <a href={`/${category.path}`}>{category.name}</a>
                    ))}
                </div>
                <PostListing {...this.props}/>
            </div>
        )
    }
}

function stateToProps(state, ownProps) {
    const activeCategory = ownProps.match.params.category;
    return {
        activeCategory,
        posts: state.posts,
        categories: state.categories
    }
}

function dispatchToProps(dispatch) {
    return {
        onDelete: (id) => {
            dispatch(deletePost(id))
        },
        fetchPosts: (category) => dispatch(fetchPosts(category)),
        fetchCategories: () => dispatch(fetchCategories())
    }
}

export default connect(stateToProps, dispatchToProps)(CategoryPage);