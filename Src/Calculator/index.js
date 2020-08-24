import React, { useState, useCallback } from 'react';
import { useDispatch} from 'react-redux';
import classes from './Calculator.module.css';
import Display from '../Component/Display';
import Keypad from '../Component/Keypad';
import {withRouter} from 'react-router-dom';

const Calculator=(props)=>{
    console.log(props);
    const[value, setValue]= useState('');
    const dispatch= useDispatch();
    const clickHandler= useCallback((val)=>{
        if(val ==="CE"){
            backspace();
        }
        else if(val === "C"){
            reset();
        }
        else if( val === "Sq"){
            Square();
        }
        else if(val === "="){
            calculate();
        }
        else{
            var oldValue= value;
            oldValue= oldValue+val;
            setValue(oldValue);
            console.log(value);
        }
        
    },[setValue, value, dispatch])
    
    
    const backspace=()=>{
        const back= value;
        back= back.slice(0,-1);
        setValue(back);
    }
    
    const Square=()=>{
        const back= value;
        back= back*back;
        setValue(back);
    }

    const calculate=()=>{
        var checkResult="";
        if( value.includes('--')){
            checkResult= value.replace('--','+');
        }
        else{
            checkResult= value;
            console.log(checkResult);
        }
        try{
            const result= eval(checkResult);
            // setValue((eval(checkResult) || "")+ "");
            setValue(result);
            console.log(value);
            console.log("evaluate");
        }
        catch(e){
            setValue("error");
        }
    }
    const reset=()=>{
        setValue();
    }
    return(
        <div className={classes.MainDiv}>
            <div className={classes.DisplayDiv}>
                <Display value={value}/>
            </div>
            <div className={classes.KeypadDiv}>
                <Keypad value={clickHandler}/>
            </div>
        </div>
    )
}

export default withRouter(Calculator)
