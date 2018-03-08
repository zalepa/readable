import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';
import './App.css';

import Homepage from './containers/Homepage.js';
import CategoryPage from './containers/CategoryPage';
import NewPostPage from './containers/NewPostPage';
import NewCommentPage from './containers/NewCommentPage';
import PostDetailPage from './containers/PostDetailPage';
import PostEditPage from './containers/PostEditPage';
import CommentEditPage from './containers/CommentEditPage';

class App extends Component {

    render() {
        return (
            <div className="App">

                <header>
                    <ul className="menu">
                        <li className="home-link"><a href="/">Readable</a></li>
                        <li><a href="/posts/new">New Post</a></li>
                    </ul>
                </header>


                <div className="page">
                    <Switch>
                        <Route exact path="/" component={Homepage}/>
                        <Route exact path="/posts/new" component={NewPostPage}/>
                        <Route exact path="/:category/:postId/comments/new" component={NewCommentPage}/>
                        <Route exact path="/comments/:id/edit" component={CommentEditPage}/>
                        <Route exact path="/:category" component={CategoryPage}/>
                        <Route exact path="/:category/:id" component={PostDetailPage}/>
                        <Route exact path="/:category/:id/edit" component={PostEditPage}/>
                    </Switch>
                </div>


                <footer>
                    <p>Made with 🧡 for Udacity [<a href="https://github.com/zalepa/readable/">source</a>]</p>
                </footer>


            </div>
        );
    }
}

export default App;
