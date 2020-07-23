import React, { useState} from 'react'
import classes from './TicTacToe.module.css'
import Board from './Block';
import { calculateWinner } from './helper';
import {withRouter} from 'react-router-dom'

const TicTacToe=()=>{
    const [board, setBoard]= useState(Array(9).fill(null));
    const [xIsNext, setXIsNext]= useState(true);
    const winner= calculateWinner(board);

    const handleCLick=(i)=>{
        const boardCopy=[...board];
        //If user clicks on occupied square or the winner is already selected
        if(boardCopy[i] || winner) return
        //When the user selects fres squares
        boardCopy[i]= xIsNext? "X":"O";
        setBoard(boardCopy);
        setXIsNext(!xIsNext);
    }
    const jumpTo=()=>{
        
    }
    const renderMoves=()=>{
        return(
            <div className={classes.Button} onClick={()=> setBoard(Array(9).fill(null), setXIsNext(true))}>
                Start Game
            </div>
        )        
    }

    return(
        <div className={classes.MainDiv}>
            <p>Tic Tac Toe</p>
            <div className={classes.Game}>
                <Board onClick={handleCLick} squares={board}/>
                <div className={classes.InfoDiv}>
                    <span>{winner? 'Winner: '+ winner: 'Next Player: '+ (xIsNext ? 'X': 'O')}</span>
                    {renderMoves()}
                </div>
            </div>
        </div>
    )
}
export default withRouter(TicTacToe);
