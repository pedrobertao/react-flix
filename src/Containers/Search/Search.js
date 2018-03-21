import React, { Component } from 'react';

import { Container, Item, Button } from 'semantic-ui-react';

import * as actionsCreators from '../../store/actions'
import { connect } from 'react-redux';
import Loader from '../../Components/UI/Loading/Loading';
import Error from '../../Components/UI/Error/Error'
import SearchItems from '../../Components/SearchItems/SearchItems';

const styles = {
    label: {
        color: 'white',
        fontSize: '30px',
    }
}

class Search extends Component {
    render() {
        let availableMovies = null;
        let searchLabel;
        
        if (this.props.searchLoading) {
            searchLabel = <Loader />
        } else {
            if (this.props.searchResults.searchError) {
                searchLabel = <Error error={this.props.searchResults.searchError} />
            } else {
                if (this.props.searchResults.length) {
                    availableMovies = <SearchItems />
                    searchLabel = <div style={styles.label}> Filmes Encontrados </div>;
                } else {
                    searchLabel = <div style={styles.label}> Nenhum Filme Encontrado </div>;
                }
            }
        }
        return (
            <Container>
                {searchLabel}
                <Item.Group divided>
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
        searchError: state.searchResults.error,
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