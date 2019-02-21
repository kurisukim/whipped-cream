import React from 'react';
import NavigationItem from './NavigationItem/NavigationItem';
import classes from './NavigationItems.module.css';

const navigationItems = (props) => {
  return (
    <ul className={classes.NavigationItems}>
        <NavigationItem link="/" active>Puff Builder</NavigationItem>
        <NavigationItem link="/auth" active>Log in</NavigationItem>
    </ul>
  );
}

export default navigationItems;
