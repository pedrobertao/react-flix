import React from 'react';
import { connect } from 'react-redux';
import { Item, Button } from 'semantic-ui-react';
import StarRatingComponent from 'react-star-rating-component';
import * as actions from '../../../../../store/actions';
import { API_IMAGE } from '../../../../../utils/constants';
import { readableDate } from '../../../../../utils/readableDate';
const textColor = 'rgb(205, 205, 205)';
const styles = {
    title: {
        color: 'white'
    },
    release: {
        color: textColor,
        fontSize: '20px'
    },
    extra: {
        color: textColor,
        fontSize: '20px',
        alignText: 'center',
        flexDirection: 'row',
        display: 'flex',
        position: 'relative',
        bottom: 0
    }
}

const SingleMovieDetails = (props) => {

    const favoriteHandler = () => {
        !props.MovieDetails.isFavorite ? props.addToMovieList(props.MovieDetails) :
            props.removeFromMovieList(props.MovieDetails.id);
    }


    let movieDetails = props.MovieDetails;
    movieDetails.isFavorite = props.myMovieList.list.find((m) => (m.id == movieDetails.id)) ? true : false;
    movieDetails.vote_average = movieDetails.vote_average < 1 ? 1 : Math.round(movieDetails.vote_average);
    return (
        <Item.Group>
            <Item>
                <Item.Image size='medium' src={`${API_IMAGE}w780` + movieDetails.poster_path} />
                <Item.Content>
                    <Item.Header style={styles.title}><h1>{movieDetails.title}</h1>
                        <StarRatingComponent
                            value={movieDetails.vote_average}
                            starCount={10}
                            editing={false}
                        />
                    </Item.Header>
                    <Item.Meta style={styles.release}>Lançamento: {readableDate(movieDetails.release_date)} <br /></Item.Meta>
                    <Item.Description className="SingleMovieDescription">
                        {movieDetails.overview}
                    </Item.Description>
                    <Item.Extra style={styles.extra}>
                        Popularidade: {Math.round(movieDetails.popularity)} <br />
                    </Item.Extra>
                    <Item.Extra style={styles.extra}>
                    </Item.Extra>

                    <Item.Extra style={styles.extra}>
                        <Button basic color={movieDetails.isFavorite ? 'red' : 'green'} onClick={favoriteHandler}>
                            {movieDetails.isFavorite ? 'Remover de minha Lista' : 'Adicionar a minha Lista'}
                        </Button>
                    </Item.Extra>

                </Item.Content>
            </Item>
        </Item.Group>
    )
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

export default connect(mapStateToProps, mapDispatchToProps)(SingleMovieDetails);
