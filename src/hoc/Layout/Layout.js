import React, { Component } from 'react';
import Aux from '../Aux/Aux';
import classes from './Layout.css';
import Toolbar from '../../Components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../Components/Navigation/SideDrawer/SideDrawer';
import { connect } from 'react-redux';
class Layout extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showSideDrawer: false
        }
    }
    sideDrawerClosedHandler = () => {
        this.setState({ showSideDrawer: false });
    }
    sideDrawerToggleHandler = () => {
        this.setState((prevState) => {
            return { showSideDrawer: !prevState.showSideDrawer }
        });
    }

    render() {

        return (
            <Aux>
                <Toolbar isAuth={this.props.isAuthetincated} drawerToggleClicked={this.sideDrawerToggleHandler} />
                <SideDrawer isAuth={this.props.isAuthetincated} open={this.state.showSideDrawer} closed={this.sideDrawerClosedHandler} />
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </Aux>
        );
    }
}
const mapStateToProps = state => {
    return {
        isAuthetincated: state.auth.token !== null
    }
}
export default connect(mapStateToProps)(Layout);