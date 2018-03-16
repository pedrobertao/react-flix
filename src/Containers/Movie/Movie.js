import React from 'react';

import { Container } from 'semantic-ui-react';
import MainMovie from '../../Components/Movie/MainMovie/MainMovie'
import Category from '../../Components/Movie/Category/Category'
const movie = (props) => {

    return (
        <Container fluid>
            <MainMovie />
            <Category />
        </Container>
    )
}

export default movie;