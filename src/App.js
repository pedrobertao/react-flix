import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import { BrowserRouter, Switch, Redirect, Route } from 'react-router-dom';

import Layout from './Containers/Layout/Layout';
import Movies from './Containers/Movie/Movie';
import MyList from './Containers/MyList/MyList';
import Search from './Containers/Search/Search';

import * as actions from './store/actions'

class App extends Component {

  componentWillMount() {
    // this.props.onFetchApiConfig();
  }
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

const mapDispatchToProps = dispatch => {
  return {
    onFetchApiConfig: () => dispatch(actions.fetchApiConfig())
  }
}
export default connect(null, mapDispatchToProps)(App);
