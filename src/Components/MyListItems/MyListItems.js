import React from 'react';
import { Item, Button } from 'semantic-ui-react';
import StarRatingComponent from 'react-star-rating-component';
import { connect } from 'react-redux';
import * as actionCreators from '../../store/actions';
import { readableDate } from '../../utils/readableDate';
const textColor = 'rgb(205, 205, 205)';
const styles = {
    title: {
        color: 'white'
    },
    release: {
        fontSize: '18px',
        color: textColor
    },
    description: {
        fontFamily: 'Open Sans',
        fontSize: '18px',
        color: textColor
    },
    extra: {
        color: textColor,
        fontSize: '18px',
        alignText: 'center',
        flexDirection: 'row',
        display: 'flex',
        position: 'relative',
        bottom: 0
    }
}

const MyListItems = (props) => {
    let movie = props.movie;

    return (
        <Item key={movie.id} style={{ padding: '10px' }}>
            <Item.Image size='medium' src={'https://image.tmdb.org/t/p/w780' + movie.poster_path} />
            <Item.Content>
                <Item.Header style={styles.title}>
                    <h1>{movie.title}</h1>
                    <StarRatingComponent
                        value={movie.vote_average}
                        starCount={10}
                        editing={false}
                    /></Item.Header>
                <Item.Meta style={styles.release}>Lançamento: {readableDate(movie.release_date)}</Item.Meta>
                <Item.Description style={styles.description}>
                    {movie.overview}
                </Item.Description>
                <Item.Extra style={styles.extra}>
                    Popularidade: {Math.round(movie.popularity)} <br />
                </Item.Extra>
                <Item.Extra style={styles.extra}>
                    <Button basic color={'red'} onClick={() => props.removeMovieFromList(movie.id)}>
                        {movie.isFavorite ? 'Remover de minha Lista' : 'Adicionar a minha Lista'}
                    </Button>
                </Item.Extra>
            </Item.Content>
        </Item>
    )
}
const mapDispatchToProps = (dispatch) => {
    return {
        removeMovieFromList: (movieId) => dispatch(actionCreators.removeMovieFromList(movieId))
    }
}
export default connect(null, mapDispatchToProps)(MyListItems);