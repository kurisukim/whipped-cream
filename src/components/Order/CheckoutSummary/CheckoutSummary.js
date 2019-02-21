import React from 'react';
import Sweet from '../../Sweet/Sweet';
import Button from '../../UI/Button/Button';
import classes from './CheckoutSummary.module.css';

const checkoutSummary = (props) => {
    return (
        <div className={classes.CheckoutSummary}>
            <div className={classes.Final}>
                <Sweet listIng={props.listIng}/>
            </div>

            <div className={classes.Summary}>
                <h1>Yummy~! We hope you enjoy our Puff Pastry ;3</h1>
                <Button
                    btnType="Error"
                    clicked={props.checkCancel}>Oops, wrong place</Button>
                <Button
                    btnType="Success"
                    clicked={props.checkContinue}>Get my treat!</Button>
            </div>
        </div>
    );
}

export default checkoutSummary;