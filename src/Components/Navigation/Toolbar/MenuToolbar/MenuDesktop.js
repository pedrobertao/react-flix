import React from 'react';
import {
    Button, Container, Icon, Image, Item, Menu, Segment, Search, Input
} from 'semantic-ui-react';
import { NavLink, withRouter } from 'react-router-dom';
import './Menu.css';
import SearchBar from './SearchBar/SearchBar';

const menuDesktop = (props) => {

    const navigateTo = (route) => {
        props.history.push(route);
    }
    return (
        <Container fluid>
            <Menu.Item onClick={() => navigateTo('/')} header>
                <Image src='https://i0.wp.com/espalhafactos.com/wp-content/uploads/2016/10/Netflix-Logo-Print_CMYK.jpg?resize=732%2C440&ssl=1' size='tiny' />
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
                    <Image avatar src='https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAmlAAAAJGY5YzAwYjFiLWFmM2QtNGUxYi04OWZkLWRlZDVlYmExYmExOQ.jpg' />
                    <div className='NavigationAvatar'>
                        <span>Pedro Bertão <br />
                            ID : 01</span>
                    </div>
                </Menu.Item>
            </Menu.Menu>
        </Container>
    )
}

export default withRouter(menuDesktop);