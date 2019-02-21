import React from 'react';
import classes from './Toolbar.module.css';
import Logo from '../../Logo/Logo';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

library.add(faBars);

const toolbar = (props) => {
    const logo = {
        fontSize: "1.2rem",
        width: "100%"
    };

    return (
        <header className={classes.Toolbar}>
            <FontAwesomeIcon icon="bars" className={classes.Menu} onClick={props.sideOpen}/>
            <Logo className={classes.MainLogo} style={logo}/>
        </header>
    );
}

export default toolbar;
