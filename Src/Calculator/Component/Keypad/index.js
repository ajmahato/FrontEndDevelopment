import React, { useCallback, useState } from 'react';
import classes from './Keypad.module.css';
import { useDispatch } from 'react-redux';
import {withRouter} from 'react-router-dom';

const Keypad=(props)=>{
    console.log(props);
    // console.log(props);
    // const[value, setValue]= useState('');
    // const dispatch= useDispatch();
    // // const name=['CE','C','ew','%','7','8','9','*','4','5','6','-','1','2','3','+','+-','0','.','='];
    // const value= useCallback((val)=>{
    //     if(val ==="CE"){
    //         backspace();
    //     }
    //     else if(val === "C"){
    //         alert("reset");
    //     }
    //     else if( val === "ew"){
    //         alert("ew clicked");
    //     }
    //     else if(val === "="){
    //         alert("Equal click");
    //         calculate();
    //     }
    //     else{
    //         var oldValue= value;
    //         oldValue= oldValue+val;
    //         setValue(oldValue);
    //         console.log(value);
    //     }
        
    // },[setValue, value, dispatch])
    // const backspace=()=>{
    //     alert("Backspace clicked");
    // }
    // const calculate=()=>{
    //     var checkResult="";
    //     if( value.includes('--')){
    //         checkResult= value.replace('--','+');
    //     }
    //     else{
    //         checkResult= value;
    //         console.log(checkResult);
    //     }
    //     try{
    //         const result= eval(checkResult);
    //         // setValue((eval(checkResult) || "")+ "");
    //         setValue(result);
    //         console.log(value);
    //         console.log("evaluate");
    //     }
    //     catch(e){
    //         setValue("error");
    //     }
    // }
    // const reset=()=>{
    //     alert("reset clicked");
    // }
    return(
        <div className={classes.MainDiv}>
            <div className={classes.ButtonDiv} onClick={props.value.bind(null,"CE")} title="Backspace" >CE</div>
            <div className={classes.ButtonDiv} onClick={props.value.bind(null,'C')} title="Clear">C</div>
            <div className={classes.ButtonDiv} title="For future use">@</div>
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
            <div className={classes.ButtonDiv} onClick={props.value.bind(null,'+-')}>+-</div>
            <div className={classes.ButtonDiv} onClick={props.value.bind(null,0)}>0</div>
            <div className={classes.ButtonDiv} onClick={props.value.bind(null,'.')}>.</div>
            <div className={classes.ButtonDiv} onClick={props.value.bind(null,'=')}>=</div>
        </div>
    )
}

export default withRouter(Keypad)