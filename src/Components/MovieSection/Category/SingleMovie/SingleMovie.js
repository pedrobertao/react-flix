import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';
import SingleMovieDetails from './SingleMovieDetails/SingleMovieDetails'
import './SingleMovie.css';

class SingleMovie extends Component {

    render() {
        let movieDetails = this.props.movieSelected;
        let singleMovieDetails = <SingleMovieDetails MovieDetails={movieDetails} />
        return (
            <CSSTransition
                mountOnEnter
                unmountOnExit
                in={this.props.isMovieSelected}
                classNames={{
                    enter: 'SingleMovieEnterBefore',
                    enterActive: 'SingleMovieEnter',
                    exit: 'SingleMovieOutBefore',
                    exitActive: 'SingleMovieOut'
                }}
            >
                {singleMovieDetails}
            </CSSTransition>
        )
    }
}
export default SingleMovie;