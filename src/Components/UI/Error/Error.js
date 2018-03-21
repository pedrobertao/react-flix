import React from 'react';

import { Container, Icon } from 'semantic-ui-react';
const error = (props) => {
    return (
        <Container>
            <Icon name='close' size='huge' inverted />
            <span style={{color:'white', fontSize: '20px'}}> {props.error}</span>
        </Container>
    )
}

export default error;