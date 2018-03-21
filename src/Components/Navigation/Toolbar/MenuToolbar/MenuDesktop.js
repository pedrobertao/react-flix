import React from 'react';
import { Container, Image, Menu } from 'semantic-ui-react';
import { NavLink, withRouter } from 'react-router-dom';
import SearchBar from './SearchBar/SearchBar';
import Avatar from '../../../../utils/imgs/avatar.png';
import LogoQD from '../../../../utils/imgs/logo-queima-diaria.png';
import './Menu.css';

const menuDesktop = (props) => {

    const navigateTo = (route) => {
        props.history.push(route);
    }
    return (
        <Container fluid>
            <Menu.Item onClick={() => navigateTo('/')} header>
                <Image src={LogoQD} size='small' />
            </Menu.Item>
            <Menu.Item onClick={() => navigateTo('/mylist')} header>
                <div className='NavigationItem'>
                    <span>Minha Lista</span>
                </div>
            </Menu.Item>
            <Menu.Menu position="right">
                <Menu.Item header>
                    <SearchBar />
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