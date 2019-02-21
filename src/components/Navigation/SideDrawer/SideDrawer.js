import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import classes from './SideDrawer.module.css';
import Aux from '../../../hoc/Aux';
import Backdrop from '../../UI/Backdrop/Backdrop';

const sideDrawer = (props) => {
  let attachedClasses = [classes.SideDrawer, classes.Close];
  if(props.open) attachedClasses = [classes.SideDrawer, classes.Open];

  const logo = {
    fontSize: "1.6rem",
  };

  return (
    <Aux>
      <div className={attachedClasses.join(' ')}>
        
        <span className={classes.Exit} onClick={props.close}>x</span>
        <Logo style={logo} />
        <nav>
          <NavigationItems />
        </nav>
      </div>
      <Backdrop show={props.open} close={props.close}/>
    </Aux>
  );
}

export default sideDrawer;
