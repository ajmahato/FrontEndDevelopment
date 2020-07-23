import React from 'react'
import classes from './Layout.module.css'
import {withRouter} from 'react-router-dom'
import Header from './Header/Header';
import Footer from './Footer/index'
const Layout=(props)=>{

    return(
        <div className={classes.MainDiv}>
            <Header />
            <div className={classes.Content}>
                {props.children}
            </div>

        </div>
    )
}

export default withRouter(Layout)