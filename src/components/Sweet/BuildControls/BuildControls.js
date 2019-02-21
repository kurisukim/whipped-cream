import React from 'react';
import BuildControl from './BuildControl/BuildControl';
import classes from './BuildControls.module.css';

const controls = [
    { label: 'Secret Cream', type: 'secretCream' },
    { label: 'Whipped Cream', type: 'whippedCream' },
    { label: 'Puff Pastry', type: 'layer' }
];

const buildControls = (props) => {
    return (
        <div className={classes.BuildControls}>
            <p className={classes.Title}>Puff pastry Building:</p>
            {controls.map(ctrl => {
                return <BuildControl
                    key={ctrl.label}
                    label={ctrl.label}
                    added={() => props.ingAdded(ctrl.type)}
                    removed={() => props.ingRemoved(ctrl.type)}
                    disabledLess={props.disabledLess[ctrl.type]}
                    disabledMore={props.disabledMore}/>;
            })}
            <hr/>
            <p className={classes.Title}>Current Price: ${props.totalPrice.toFixed(2)}</p>
            <button 
                className={classes.OrderButton}
                disabled={!props.purchasable}
                onClick={props.showModal}>Let's Order!</button>
        </div>
    );
};

export default buildControls;