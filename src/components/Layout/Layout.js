import React, {Component} from 'react';
import Aux from '../../hoc/Aux';
import classes from './Layout.module.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

export default class Layout extends Component {
    state = {
        showSideMenu: false
    };

    closeSideDrawerHandler = () => {
        this.setState({showSideMenu: false});
    }

    openSideDrawerHandler = () => {
        this.setState({showSideMenu: true});
    }

    render() {
        return (
            <Aux>
                <Toolbar sideOpen={this.openSideDrawerHandler}/>
                <SideDrawer 
                    open={this.state.showSideMenu}
                    close={this.closeSideDrawerHandler}/>
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </Aux>
        );
    }

}