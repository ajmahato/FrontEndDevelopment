import React from 'react'
import classes from './Header.module.css'
import {withRouter} from 'react-router-dom'


const Header=(props)=>{

    const CounterClick=()=>{
        props.history.push('/Counter');
    }
    const TicTacToeClick=()=>{
        props.history.push('/TicTacToe');
    }
    const ToDoClick=()=>{
        props.history.push('/ToDo');
    }
    return(
        <div className={classes.MainDiv}>
            <div className={classes.Link}>
                <ul>
                    <li onClick={CounterClick}>Counter</li>
                    <li onClick={TicTacToeClick}>Tic-Tac-Toe</li>
                    <li onClick={ToDoClick}>ToDo List</li>
                </ul>
            </div>
        </div>
    )
}

export default withRouter(Header);
