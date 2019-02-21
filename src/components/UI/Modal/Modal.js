import React from 'react';
import classes from './Modal.module.css';
import Aux from '../../../hoc/Aux';
import Backdrop from '../Backdrop/Backdrop';

const modal = (props) => {
        return (
            <Aux>
                <div
                    className={classes.Modal}
                    style={{ display: props.showModal ? 'block' : 'none' }}>
                    {props.children}
                </div>
                <Backdrop show={props.showModal} close={props.modalClosed} />
            </Aux>
        );
}

export default modal;