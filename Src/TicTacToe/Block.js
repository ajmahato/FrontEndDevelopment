import React from 'react'
import Square from './Square'
import {withRouter} from 'react-router-dom'
import classes from './TicTacToe.module.css'

const Board=({onClick, squares})=>{
    return(
        <div className={classes.BoardDiv}>
        {squares.map((square, i) => {
            return(
            <Square key={i} value={square} onClick={() => onClick(i)} />
            )
        })}
        </div>
    )
}
export default withRouter(Board)