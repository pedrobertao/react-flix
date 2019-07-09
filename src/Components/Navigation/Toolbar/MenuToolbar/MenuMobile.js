import React from 'react';
import { Container, Menu } from 'semantic-ui-react';
import { withRouter } from 'react-router-dom';

import SearchBar from '../../../Navigation/Toolbar/MenuToolbar/SearchBar/SearchBar';

const menuDesktop = (props) => {
    const navigateTo = (route) => {
        props.history.push(route);
    }
    return (
        <Container>
            <Menu.Item onClick={() => navigateTo('/')} header>
                <h3 className='logo'>ReactFlix</h3>
            </Menu.Item>
            <Menu.Item onClick={() => navigateTo('/mylist')} header>
                <div className='NavigationItem'>
                    <span>Minha Lista</span>
                </div>
            </Menu.Item>
            <Menu.Item header>
                <SearchBar size='tiny'/>
            </Menu.Item>
        </Container>
    )
}

export default withRouter(menuDesktop);