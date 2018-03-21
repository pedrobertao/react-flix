import React, { Component } from 'react';
import Aux from '../../hoc/Aux/Aux';
import { Link, Redirect, withRouter } from 'react-router-dom';
import Toolbar from '../../Components/Navigation/Toolbar/Toolbar';
import Footer from '../../Components/UI/Footer/Footer'

const Layout = (props) => {
    return (
        <div className={'Layout'}>
            <Toolbar />
            <div style={{ marginTop: '100px' }} onClick={this.sideBarCloseHandler}>
                {props.children}
            </div>
            {/* <Footer /> */}
        </div>
    )
}

export default withRouter(Layout);