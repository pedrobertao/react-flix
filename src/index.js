import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'semantic-ui-css/semantic.min.css';

import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import movieApiReducer from './store/reducers/movieApi'
import moviesListReducer from './store/reducers/listMovies'

const mainReducer = combineReducers({
    apiConfig: movieApiReducer,
    movieList: moviesListReducer
})

const store = createStore(mainReducer, applyMiddleware(thunk));

ReactDOM.render(<Provider store={store}><App/></Provider>, document.getElementById('root'));
registerServiceWorker();
