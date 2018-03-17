import React, { Component } from 'react';

import { Container, Grid, Image, Item, Button } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { API_IMAGE } from '../../utils/constants'
import * as actions from '../../store/actions'
import './MyList.css';
import Aux from '../../hoc/Aux'
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
class MyList extends Component {

    render() {
        let listOfMovies = [];
        for (let movie of this.props.movielist.list) {
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
                            <Button color='red' onClick={() => this.props.removeMovieFromList(movie.id)}>
                                Remover dos Favoritos
                            </Button>
                        </Item.Extra>
                    </Item.Content>
                </Item>
            )
        }
        return (
            <Container textAlign="justified">
                <Item.Group>
                    {listOfMovies}
                </Item.Group>
            </Container>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        movielist: state.movieList
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        removeMovieFromList: (movieId) => dispatch(actions.removeMovieFromList(movieId))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(MyList);