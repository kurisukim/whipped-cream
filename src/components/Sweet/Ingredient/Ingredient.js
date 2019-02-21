import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classes from './Ingredient.module.css';

export default class Ingredient extends Component {
    render() {
        let ingredient = null;
        let adjustingPos = {
            zIndex: this.props.index,
            top: this.props.top + 'px'
        };
        switch (this.props.type) {
            case ('top'):
                ingredient = <div className={classes.Top}></div>;
                break;
            case ('bottom'):
                ingredient = <div className={classes.Bottom}></div>;
                break;
            case ('layer'):
                ingredient = <div className={classes.Layer} style={adjustingPos}></div>;
                break;
            case ('whippedCream'):
                ingredient = <div className={classes.WhippedCream} style={adjustingPos}></div>;
                break;
            case ('secretCream'):
                ingredient = <div className={classes.SecretCream} style={adjustingPos}></div>;
                break;
            default: ingredient = null;
        }

        return ingredient;
    }
};

Ingredient.propTypes = {
    type: PropTypes.string.isRequired
}