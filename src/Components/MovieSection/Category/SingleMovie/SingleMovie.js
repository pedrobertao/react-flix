import React, { Component } from 'react';
import { Grid, Image, Container, Item, Icon, Button } from 'semantic-ui-react';
import { connect } from 'react-redux';
import axios from 'axios';
import './SingleMovie.css';
import { MOVIE_GENRE } from '../../../../utils/constants'
import * as actions from '../../../../store/actions'
import { CSSTransition } from 'react-transition-group';

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
        fontSize: '35px',
    },
    extra: {
        bottom: '0px',
        color: 'white',
        fontSize: '20px'
    }
}
class SingleMovie extends Component {

    clickWatchHandler = () => {
        alert('Por enquanto não dá pra assistir');
    }
    favoriteHandler = () => {
        !this.props.movieSelected.isFavorite ? this.props.addToMovieList(this.props.movieSelected) :
            this.props.removeFromMovieList(this.props.movieSelected.id);
    }

    builItemMovie = (movieDetails) => {
        return (
            <Item.Group>
                <Item>
                    <Item.Image size='medium' src={'https://image.tmdb.org/t/p/w780' + movieDetails.poster_path} />
                    <Item.Content>
                        <Item.Header style={styles.title}><h1>{movieDetails.title}</h1></Item.Header>
                        <Item.Meta style={styles.release}>{movieDetails.release_date}</Item.Meta>
                        <Item.Description style={styles.description}>
                            {movieDetails.overview}
                        </Item.Description>
                        <Item.Extra style={styles.extra}>
                            Popularidade: {Math.round(movieDetails.popularity)} <br />
                            <Button secondary onClick={this.clickWatchHandler}>
                                Assistir
                                </Button>
                            <Button toggle active={movieDetails.isFavorite} onClick={this.favoriteHandler}>
                                Favoritar
                                </Button>
                        </Item.Extra>
                    </Item.Content>
                </Item>
            </Item.Group>
        )
    }

    render() {
        let movieDetails = this.props.movieSelected;
        movieDetails.isFavorite = this.props.myMovieList.list.find((m) => (m.id == movieDetails.id)) ? true : false;
        let itemGroup = this.builItemMovie(movieDetails);
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
                {itemGroup}
            </CSSTransition>
        )
    }
}

const mapStateToProps = state => {
    return {
        myMovieList: state.movieList
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addToMovieList: (movie) => dispatch(actions.addMovietoList(movie)),
        removeFromMovieList: (movieId) => dispatch(actions.removeMovieFromList(movieId))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(SingleMovie);