import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'semantic-ui-css/semantic.min.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import movieApiReducer from './store/reducers/movieApi'
import moviesListReducer from './store/reducers/listMovies'
import searchReducer from './store/reducers/search'

const mainReducer = combineReducers({
    apiConfig: movieApiReducer,
    movieList: moviesListReducer,
    searchResults: searchReducer
})

const store = createStore(mainReducer, applyMiddleware(thunk));

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
