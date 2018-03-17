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
    }
}

class Search extends Component {

    checkFavoriteMovie = (movie) => {
        movie.isFavorite = this.props.movieList.find(m => m.isFavorite && m.id == movie.id) ? true : false;
        return movie;
    }
    favoriteHandler = (movie) => {
        movie.isFavorite ? this.props.addToMovieList(movie) : this.props.removeFromMovieList(movie.id);
    }
    buildMoviesGrid = () => {
        let listOfMovies = [];
        this.props.searchResults.some((movie, index) => {
            if (index > 9) {
                return;
            }
            movie = this.checkFavoriteMovie(movie);

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
                            Popularidade: {Math.round(movie.popularity)} <br />
                            <Button toggle active={movie.isFavorite} onClick={() => this.favoriteHandler(movie)}>
                                Favoritar
                            </Button>
                        </Item.Extra>
                    </Item.Content>
                </Item>
            )
        });

        return listOfMovies;
    }
    render() {
        let availableMovies = null;
        let searchLabel;
        if (this.props.searchLoading) {
            searchLabel = <Item style={{ color: 'white' }}> Loading </Item>;
        } else {
            if (this.props.searchResults.length) {
                availableMovies = this.buildMoviesGrid();
                searchLabel = <Item style={{ color: 'white' }}> Filmes Encontrados </Item>;
            } else {
                searchLabel = <Item style={{ color: 'white' }}> Nenhum Filme Encontrado </Item>;

            }
        }
        return (
            <Container textAlign='center'>
                <Item.Group>
                    {searchLabel}
                    {availableMovies}
                </Item.Group>
            </Container>
        )
    }
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
export default connect(mapStateToProps, mapDispatchToProps)(Search);