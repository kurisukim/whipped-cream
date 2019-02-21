import React from 'react';
import classes from './BuildControl.module.css';

const buildControl = (props) => {
    return (
        <div className={classes.BuildControl}>
            <div className={classes.Label}>{props.label}:</div>
            <div className={classes.Options}>
                <button className={classes.Less} onClick={props.removed} disabled={props.disabledLess}>Less</button>
                <button className={classes.More} onClick={props.added} disabled={props.disabledMore}>More</button>
            </div>
        </div>
    );
};

export default buildControl;