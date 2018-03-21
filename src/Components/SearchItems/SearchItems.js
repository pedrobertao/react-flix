import React, { Component } from 'react';

import { Container, Item, Button } from 'semantic-ui-react';

import * as actionsCreators from '../../store/actions'
import { connect } from 'react-redux';

const styles = {
    title: {
        color: 'white'
    },
    release: {
        color: 'white',
        fontSize: '20px'
    },
    description: {
        color: 'white',
        fontSize: '20px',
    },
    extra: {
        bottom: '0px',
        color: 'white',
        fontSize: '20px'
    },
    label: {
        color: 'white',
        fontSize: '30px',
    }
}

const SearchItems = (props) => {

    const checkFavoriteMovie = (movie) => {
        movie.isFavorite = props.movieList.find(m => m.isFavorite && m.id == movie.id) ? true : false;
        return movie;
    }
    const favoriteHandler = (movie) => {
        !movie.isFavorite ? props.addToMovieList(movie) : props.removeFromMovieList(movie.id);
    }

    let listOfMovies = [];
    props.searchResults.some((movie, index) => {
        if (index > 9) {
            return;
        }
        movie = checkFavoriteMovie(movie);

        listOfMovies.push(
            <Item key={movie.id} style={{ padding: '10px' }}>
                <Item.Image size='medium' src={'https://image.tmdb.org/t/p/w780' + movie.poster_path} />
                <Item.Content>
                    <Item.Header style={styles.title}><h1>{movie.title}</h1></Item.Header>
                    <Item.Meta style={styles.release}>{movie.release_date}</Item.Meta>
                    <Item.Description style={styles.description}>
                        {movie.overview}
                    </Item.Description>
                    <Item.Extra style={styles.extra}>
                        Popularidade: {Math.round(movie.popularity)}
                    </Item.Extra>
                    <Item.Extra style={styles.extra}>
                        <Button basic color={movie.isFavorite ? 'red' : 'green'} onClick={() => favoriteHandler(movie)}>
                            {movie.isFavorite ? 'Remover de minha Lista' : 'Adicionar a minha Lista'}
                        </Button>
                    </Item.Extra>
                </Item.Content>
            </Item>
        )
    });

    return listOfMovies;

}

const mapStateToProps = (state) => {
    return {
        searchResults: state.searchResults.results,
        searchLoading: state.searchResults.isLoading,
        movieList: state.movieList.list
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addToMovieList: (movie) => dispatch(actionsCreators.addMovietoList(movie)),
        removeFromMovieList: (movieId) => dispatch(actionsCreators.removeMovieFromList(movieId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchItems);