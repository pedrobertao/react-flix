import React, { Component } from 'react';

import { Container, Grid, Image, Item } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { API_IMAGE } from '../../utils/constants'
import * as actions from '../../store/actions'
import './MyList.css';
import MyListItem from '../../Components/MyListItems/MyListItems';


const MyList = (props) => {
    let listOfMovies = [];
    for (let movie of props.movielist.list) {
        listOfMovies.push(
            <MyListItem movie={movie} />
        )
    }
    return (
        <Container>
            <Item.Group divided>
                {listOfMovies}
            </Item.Group>
        </Container>
    )
}

const mapStateToProps = (state) => {
    return {
        movielist: state.movieList
    }
}

export default connect(mapStateToProps)(MyList);