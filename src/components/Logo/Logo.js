import React from 'react';
import classes from './Logo.module.css';

const logo = (props) => {
  return (
    <div className={classes.Logo} style={props.style}>
      Whipped Cream
    </div>
  )
}

export default logo;
