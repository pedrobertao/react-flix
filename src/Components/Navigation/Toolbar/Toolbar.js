import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import MenuMobile from './MenuToolbar/MenuMobile';
import MenuDesktop from './MenuToolbar/MenuDesktop';

const styles = {
    menu: {
        backgroundColor: 'rgba(0,0,0,0.8)',
        height: '100px'
    }
}
const Toolbar = (props) => {
    let menu = window.innerWidth < 500 ? <MenuMobile /> : <MenuDesktop />;
    return (
        <Menu fixed="top" borderless style={styles.menu}>
            {menu}
        </Menu>
    )
}
export default Toolbar;

