import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import {
    Button, Container, Grid, Header, Icon, Image, Item, Label, Menu, Segment, Step, Sidebar,
} from 'semantic-ui-react'
import { Link, Redirect, withRouter } from 'react-router-dom';
import Toolbar from '../../Components/Navigation/Toolbar/Toolbar';

class Layout extends Component {

    state = {
        sideBar: false
    }

    sideBarOpenHandler = () => {
        this.setState({ sideBar: !this.state.sideBar })
    }

    sideBarCloseHandler = () => {
        this.setState({ sideBar: false })
    }
    navigateSideBar = (route) => {
        this.props.history.push(route);
        this.setState({ sideBar: false })
    }

    render() {
        return (
            <Aux>
                <Sidebar.Pushable >
                    <Sidebar as={Menu} animation='overlay' width='thin' visible={this.state.sideBar} icon='labeled' vertical inverted>
                        <Menu.Item onClick={() => this.navigateSideBar('/')} name='Logo'>
                            <Icon name='home' />
                            Logo
                    </Menu.Item>
                        <Menu.Item onClick={() => this.navigateSideBar('/mylist')} name='Minha Lista'>
                            <Icon name='male' />
                            About Me
                    </Menu.Item>
                    </Sidebar>
                    <Sidebar.Pusher>
                        {<Toolbar SideBarHandler={this.sideBarOpenHandler} />}
                        <div style={{ marginTop: '100px' }} onClick={this.sideBarCloseHandler}>
                            {this.props.children}
                        </div>
                    </Sidebar.Pusher>
                </Sidebar.Pushable>
            </Aux>
        )
    }
}

export default withRouter(Layout);