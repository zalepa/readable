import React, {Component} from 'react';
import {connect} from 'react-redux';
import PostListing from '../ui/PostListing.jsx';
import {deletePost, fetchPosts, sortPosts} from "../../actions/posts";
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
                    <span className="pull-left">
                        <strong>#{this.props.activeCategory}</strong>
                    </span>
                    Categories:{" "}
                    {this.props.categories.map(category => (
                        <a key={category.name} href={`/${category.path}`}>{category.name}</a>
                    ))}
                </div>
                <PostListing {...this.props} hideBody={true}/>
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
        fetchCategories: () => dispatch(fetchCategories()),
        onSort: (e) => {
            e.preventDefault();
            dispatch(sortPosts(e.target.name, e.target.dataset.dir));
        }
    }
}

export default connect(stateToProps, dispatchToProps)(CategoryPage);