import React from 'react';
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

export default Layout;