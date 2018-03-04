import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';

import Homepage from './containers/Homepage.js';
import CategoryPage from './containers/CategoryPage.js';
import NewPostPage from './containers/NewPostPage.js';
import PostDetailPage from './containers/PostDetailPage.js';
import EditPost from './EditPost.jsx';

class App extends Component {

  render() {
    return (
      <div className="App">

        <ul className="menu">
          <li><a href="/">Readable</a></li>
          <li><a href="/posts/new">New Post</a></li>
        </ul>

        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/posts/new" component={NewPostPage} />
          <Route exact path="/:category" component={CategoryPage} />
          <Route exact path="/:category/:id" component={PostDetailPage} />
          <Route exact path="/:category/:id/edit" component={EditPost} />
        </Switch>
      </div>
    );
  }
}

export default App;
