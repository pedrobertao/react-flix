import React from 'react';

import { Item, Button } from 'semantic-ui-react';
import * as actions from '../../store/actions';
import { connect } from 'react-redux';

const styles = {
    title: {
        color: 'white'
    },
    release: {
        fontSize: '20px',
        color: 'rgb(185, 185, 185)'
    },
    description: {
        fontFamily: 'Open Sans',
        fontSize: '20px',
        color: 'rgb(185, 185, 185)'
    },
    extra: {
        color: 'rgb(185, 185, 185)',
        fontSize: '20px',
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
                <Item.Header style={styles.title}><h1>{movie.title}</h1></Item.Header>
                <Item.Meta style={styles.release}>{movie.release_date}</Item.Meta>
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
        removeMovieFromList: (movieId) => dispatch(actions.removeMovieFromList(movieId))
    }
}
export default connect(null, mapDispatchToProps)(MyListItems);