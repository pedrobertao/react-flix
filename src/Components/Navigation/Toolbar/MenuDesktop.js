import React from 'react';
import {
    Button, Container, Icon, Image, Item, Menu, Segment, Search
} from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const menuDesktop = (props) => {
    return (
        <Container fluid>
            <Menu.Item header>
                <Link to='/'><Image src='https://i0.wp.com/espalhafactos.com/wp-content/uploads/2016/10/Netflix-Logo-Print_CMYK.jpg?resize=732%2C440&ssl=1' size='tiny' />
                </Link>
            </Menu.Item>
            <Menu.Item header>
                <Link to="/mylist">Minha Lista</Link>
            </Menu.Item>

            <Menu.Menu position="right">
                <Menu.Item header>
                    <Search
                        {...this.props}
                    />
                </Menu.Item>
                <Menu.Item onClick={this.fetchDownload}>
                    <Image avatar src='https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAmlAAAAJGY5YzAwYjFiLWFmM2QtNGUxYi04OWZkLWRlZDVlYmExYmExOQ.jpg' />
                    Pedro Bertão <br />
                    ID : 01
            </Menu.Item>
            </Menu.Menu>
        </Container>
    )
}

export default menuDesktop;