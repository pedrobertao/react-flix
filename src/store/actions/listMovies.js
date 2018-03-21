import * as constants from './constants';

export const addMovietoList = (movie) => {
    return {
        type: constants.ADD_LIST_MOVIES,
        movie: movie
    }
}

export const removeMovieFromList = (movieId) => {
    return {
        type: constants.REMOVE_LIST_MOVIES,
        movieId
    }
}