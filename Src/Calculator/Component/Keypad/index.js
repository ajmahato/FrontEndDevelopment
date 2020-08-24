import React, { useCallback, useState } from 'react';
import classes from './Keypad.module.css';
import { useDispatch } from 'react-redux';
import {withRouter} from 'react-router-dom';

const Keypad=(props)=>{

    return(
        <div className={classes.MainDiv}>
            <div className={classes.ButtonDiv} onClick={props.value.bind(null,"CE")} title="Backspace" >CE</div>
            <div className={classes.ButtonDiv} onClick={props.value.bind(null,'C')} title="Clear">C</div>
            <div className={classes.ButtonDiv} onClick={props.value.bind(null,'Sq')}>x^2</div>
            <div className={classes.ButtonDiv} onClick={props.value.bind(null,'/')}>/</div>
            <div className={classes.ButtonDiv} onClick={props.value.bind(null,7)}>7</div>
            <div className={classes.ButtonDiv} onClick={props.value.bind(null,8)}>8</div>
            <div className={classes.ButtonDiv} onClick={props.value.bind(null,9)}>9</div>
            <div className={classes.ButtonDiv} onClick={props.value.bind(null,'*')}>*</div>
            <div className={classes.ButtonDiv} onClick={props.value.bind(null,4)}>4</div>
            <div className={classes.ButtonDiv} onClick={props.value.bind(null,5)}>5</div>
            <div className={classes.ButtonDiv} onClick={props.value.bind(null,6)}>6</div>
            <div className={classes.ButtonDiv} onClick={props.value.bind(null,'-')}>-</div>
            <div className={classes.ButtonDiv} onClick={props.value.bind(null,1)}>1</div>
            <div className={classes.ButtonDiv} onClick={props.value.bind(null,2)}>2</div>
            <div className={classes.ButtonDiv} onClick={props.value.bind(null,3)}>3</div>
            <div className={classes.ButtonDiv} onClick={props.value.bind(null,'+')}>+</div>
            <div className={classes.ButtonDiv} onClick={props.value.bind(null,'=-')}>+-</div>
            <div className={classes.ButtonDiv} onClick={props.value.bind(null,0)}>0</div>
            <div className={classes.ButtonDiv} onClick={props.value.bind(null,'.')}>.</div>
            <div className={classes.ButtonDiv} onClick={props.value.bind(null,'=')}>=</div>
        </div>
    )
}

export default withRouter(Keypad)
