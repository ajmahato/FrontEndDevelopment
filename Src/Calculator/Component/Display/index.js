import React from 'react';
import classes from './Display.module.css';
import {withRouter} from 'react-router-dom';
const button=(props)=>{

    return(
        <div className={classes.MainDiv}>
            {props.value} 
        </div>
    )
}

export default withRouter(button)