import React from 'react'
import classes from './OrderSummary.module.css';
import Button from '../../UI/Button/Button';

const orderSummary = (props) => {
    const ingredientSummary = Object.keys(props.ingredients).map(ingKey => {
        return<li key={ingKey}>
            <span>{ingKey}</span>: {props.ingredients[ingKey]}
        </li>
    });

    return (
        <div className={classes.OrderSummary}>
            <h3>Your Order is here!</h3>
            <p className={classes.Description}>Please, confirm the ingredients bellow:</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p className={classes.Total}>Total: ${props.total.toFixed(2)}</p>
            <br/>
            <Button 
                btnType="Error"
                clicked={props.purchaseCancelled}>Cancel</Button>
            <Button
                btnType="Success"
                clicked={props.purchaseContinued}>Continue</Button>
        </div>
    );
}

export default orderSummary;
