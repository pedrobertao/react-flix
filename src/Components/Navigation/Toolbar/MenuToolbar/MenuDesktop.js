import React from 'react';
import { Container, Image, Menu } from 'semantic-ui-react';
import { withRouter } from 'react-router-dom';

import './Menu.css';
import SearchBar from './SearchBar/SearchBar';
import Avatar from '../../../../utils/imgs/avatar.png';

const menuDesktop = (props) => {

    const navigateTo = (route) => {
        props.history.push(route);
    }
    return (
        <Container fluid>
            <Menu.Item onClick={() => navigateTo('/')} header>
                <h1 className='logo'>ReactFlix</h1>
            </Menu.Item>
            <Menu.Item onClick={() => navigateTo('/mylist')} header>
                <div className='NavigationItem'>
                    <span>Minha Lista</span>
                </div>
            </Menu.Item>
            <Menu.Menu position="right">
                <Menu.Item header>
                    <SearchBar size='large' />
                </Menu.Item>
                <Menu.Item onClick={() => navigateTo('/')}>
                    <Image size='mini' src={Avatar} />
                    <div className='NavigationAvatar'>
                        <a class="Avatar" href="https://www.linkedin.com/in/pedro-bert%C3%A3o-7a574a87/">
                            Pedro<br />
                            Bertão</a>
                    </div>
                </Menu.Item>
            </Menu.Menu>
        </Container>
    )
}

export default withRouter(menuDesktop);