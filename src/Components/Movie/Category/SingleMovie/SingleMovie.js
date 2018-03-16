import React, { Component } from 'react';
import { Grid, Image, Container, Item, Icon, Button } from 'semantic-ui-react';
import { connect } from 'react-redux';
import axios from 'axios';
import './SingleMovie.css';
import * as actions from '../../../../store/actions'

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
        if (!this.props.movieSelected.isFavorite) this.props.addToMovieList(this.props.movieSelected);
        else this.props.removeFromMovieList(this.props.movieSelected.id);
    }

    render() {
        let movieDetails = this.props.movieSelected;
        movieDetails.isFavorite = false;
        if (this.props.myMovieList.list.find((m) => (m.id == movieDetails.id))) {
            movieDetails.isFavorite = true;
        }
        console.log("TEST", movieDetails);
        return (
            <Container className='SingleMovie' fluid style={{ padding: '25px' }}>
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
                                {/* <Icon size="big" name='favorite' color='yellow' onClick={this.favoriteHandler} /> */}
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
            </Container>
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