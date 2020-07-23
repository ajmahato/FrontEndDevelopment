import React, { useState, useCallback } from 'react';
import classes from './Count.module.css';
import {withRouter} from 'react-router-dom'

const Counter=()=>{
    const [count, setCount]=useState(0);
    const OnIncrementClick = useCallback((e) => {
        setCount(count+1);
      }, [count]);
      const OnDecrementClick = useCallback((e) => {
        setCount(count-1);
    }, [count]);
    return(
        <div className={classes.MainDiv}>
            <div className={classes.DisplayDiv}>
                <p>Counter</p>
                {count}
            </div>
            <div className={classes.ButtonDiv}>
                <div onClick={OnIncrementClick} className={classes.Button}>Increment</div>
                <div onClick={OnDecrementClick} className={classes.Button}>Decrement</div>
            </div>
        </div>
    )
}
export default withRouter(Counter);
