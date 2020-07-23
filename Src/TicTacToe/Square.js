import React from 'react'
import classes from './TicTacToe.module.css'
import {withRouter} from 'react-router-dom'

const square=({value, onClick})=>{
    return(
        <div className={classes.SquareDiv} onClick={onClick}>
        {value}
    </div>
    )
}
export default withRouter(square);