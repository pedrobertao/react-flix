import React from 'react';
import { Container, Image, Menu } from 'semantic-ui-react';
import { withRouter } from 'react-router-dom';
import MiniLogo from '../../../../utils/imgs/mini-logo-queima-diaria.png';
import SearchBar from '../../../Navigation/Toolbar/MenuToolbar/SearchBar/SearchBar';

const menuDesktop = (props) => {
    const navigateTo = (route) => {
        props.history.push(route);
    }
    return (
        <Container>
            <Menu.Item onClick={() => navigateTo('/')} header>
                <Image size='mini' src={MiniLogo} />
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