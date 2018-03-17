import React from 'react';
import {
    Button, Container, Icon, Image, Item, Menu, Segment
} from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const menuDesktop = (props) => {
    return (
        <Container>
            <Menu.Item onClick={props.SideBarHandler} header>
                <Icon name='bars' size='large' />
            </Menu.Item>
            <Menu.Menu position="right">
                <Menu.Item header onClick={this.fetchDownload}>
                    <a href="https://www.github.com/pedrobertao"><Icon size='large' name='github square' /></a>
                </Menu.Item>
                <Menu.Item headeronClick={this.fetchDownload}>
                    <a href="https://www.linkedin.com/in/pedro-bert%C3%A3o-7a574a87/"><Icon size='large' name='linkedin square' /></a></Menu.Item>
            </Menu.Menu>
        </Container>
    )
}

export default menuDesktop;