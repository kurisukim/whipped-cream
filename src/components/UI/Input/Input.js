import React from 'react'
import classes from './Input.module.css';

const input = (props) => {
    let inputElement, validationError;
    const inputClasses = [classes.Input];
    if(props.invalid && props.touched){
        inputClasses.push(classes.Invalid);
        validationError = <p className={classes.Error}>Please, entre a valid value!</p>;
    }

    switch(props.elementType){
        case('textarea'): inputElement = <textarea 
                                            {...props.elementConfig} 
                                            value={props.value} 
                                            className={inputClasses.join(' ')} onChange={props.changed}/>; 
                                        break;
        
        default: inputElement = <input 
                                    {...props.elementConfig} 
                                    value={props.value} 
                                    className={inputClasses.join(' ')} onChange={props.changed}/>;    
    }

    return (
        <div>
            {inputElement}
            {validationError}
        </div>
    )
}

export default input
