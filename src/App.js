import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Switch, Redirect, Route } from 'react-router-dom';

import Layout from './Containers/Layout/Layout';
import Movies from './Containers/Movie/Movie';
import MyList from './Containers/MyList/MyList';
import Search from './Containers/Search/Search';
  
class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route path="/search" component={Search}></Route>
            <Route path="/mylist" component={MyList}></Route>
            <Route path="/" component={Movies}></Route>
            <Redirect to="/" />
          </Switch>
        </Layout>
      </BrowserRouter>
    );
  }
}

export default App;
