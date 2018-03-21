import React from 'react';

import { Container, Item } from 'semantic-ui-react';
import { connect } from 'react-redux';
import MyListItem from '../../Components/MyListItems/MyListItems';


const MyList = (props) => {
    let listOfMovies = [];
    for (let movie of props.movielist.list) {
        listOfMovies.push(
            <MyListItem movie={movie} />
        )
    }
    return (
        <Container style={{ marginBottom: '20px' }}>
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