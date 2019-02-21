import React from 'react';
import Ingredient from './Ingredient/Ingredient';
import classes from './Sweet.module.css';

const sweet = (props) => {
    let index = 11;
    let top = 0;

    let ingredientsArray = props.listIng.map((value, i) => {
        index -= 1;
        top += 10;
        return <Ingredient key={props.listIng[i] + i} type={props.listIng[i]} index={index} top={top} />
    });

    if (ingredientsArray.length === 0) {
        ingredientsArray = <p className={classes.Start}>Let's add some goodies, <br />shall we?</p>;
    }

    return (
        <div className={classes.Sweet}>
            <Ingredient type="top"/>
            {ingredientsArray}
            <Ingredient type="bottom"/>
        </div>
    );
};

export default sweet;