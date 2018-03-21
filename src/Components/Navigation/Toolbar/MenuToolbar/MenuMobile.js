import React from 'react';
import { Container, Image, Menu } from 'semantic-ui-react';
import { withRouter } from 'react-router-dom';
import SearchBar from '../../../Navigation/Toolbar/MenuToolbar/SearchBar/SearchBar';

const menuDesktop = (props) => {
    const navigateTo = (route) => {
        props.history.push(route);
    }
    return (
        <Container>
            <Menu.Item onClick={() => navigateTo('/')} header>
                <Image size='mini' src='https://img13.androidappsapk.co/300/1/b/1/br.com.ringa.queimadiaria.png' />
            </Menu.Item>
            <Menu.Item onClick={() => navigateTo('/mylist')} header>
                <div className='NavigationItem'>
                    <span style={{ fontSize: '15px' }}>Minha Lista</span>
                </div>
            </Menu.Item>
            <Menu.Item header>
                <SearchBar />
            </Menu.Item>
        </Container>
    )
}

export default withRouter(menuDesktop);