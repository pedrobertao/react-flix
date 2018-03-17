import React, { Component } from 'react';
import {
    Button, Container, Icon, Image, Item, Menu, Segment
} from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import MenuMobile from './MenuToolbar/MenuMobile';
import MenuDesktop from './MenuToolbar/MenuDesktop';

const styles = {
    menu: {
        backgroundColor: 'black',
        height: '100px'
    }
}
export default class Toolbar extends Component {

    render() {
        let menu = window.innerWidth < 500 ? <MenuMobile SideBarHandler={this.props.SideBarHandler} /> : <MenuDesktop SideBarHandler={this.props.SideBarHandler} />;
        return (
            <Menu fixed="top" borderless style={styles.menu}>
                {menu}
            </Menu>
        )
    }
}

