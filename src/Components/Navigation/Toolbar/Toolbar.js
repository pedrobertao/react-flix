import React, { Component } from 'react';
import {
    Button, Container, Icon, Image, Item, Menu, Segment
} from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import MenuMobile from './MenuMobile';
import MenuDesktop from './MenuDesktop';
export default class Toolbar extends Component {

    render() {
        let menu = window.innerWidth < 500 ? <MenuMobile SideBarHandler={this.props.SideBarHandler} /> : <MenuDesktop SideBarHandler={this.props.SideBarHandler} />;
        return (
            <Menu fixed="top" inverted style={{ height: '100px' }} >
                {menu}
            </Menu >
        )
    }
}

