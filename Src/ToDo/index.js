import React, {useState, useCallback} from 'react';
import classes from './ToDo.module.css';

const Todo=(props)=>{
    const [name, setName]= useState("");
    const [count, setCount]= useState(0);
    const [designation, setDesignation]= useState("");
    const nameChangeHandler= useCallback((e)=>{
        setName(e.target.value);
    },[setName])
    const designationChangeHandler= useCallback((e)=>{
        setDesignation(e.target.value);
    },[setDesignation])
    const [list, setList]= useState([]);
    const deleteClick=e=>{
        const {id}= e.target.parentElement;
        list.splice(id,1);
        setList([...list])
    }
    const addClick= useCallback((e)=>{
        const value= [name, designation];
        const temp= count+1;
        if(temp<=5){
            setCount(temp)
            setList([...list, value]);
        }
    },)
    return(
        <div className={classes.MainDiv}>
            <div className={classes.WriteDiv}>
                <div className={classes.Write}>
                    <div className={classes.InputDiv}>
                        <input type="text" value={name}
                        defaultValue="Name"
                        onChange={nameChangeHandler}
                        placeholder="Name"/>
                    </div>
                    <div className={classes.InputDiv}>
                        <input type="text" value={designation}
                        defaultValue="Designation"
                        onChange={designationChangeHandler}
                        placeholder="Designation"/>
                    </div>
                    <div className={classes.Button} onClick={addClick}>Add</div>
                </div>
                <div className={classes.Info}>
                    This is a basic <span style={{color:'white'}}>"To-Do list"</span> App. Currently I have set the maximum number of list to five, but it can be increased more if you disable the if condition in the <span style={{color:'White'}}>"AddCLick"</span> event.
                </div>
            </div>
            <div className={classes.DisplayDiv}>
                <div className={classes.Row}>
                    <div className={classes.Column}>Name</div>
                    <div className={classes.Column}>Designation</div>
                </div>
                <div className={classes.List}>
                {
                    list.map((li,i)=>{
                    return(
                        <div className={classes.InnerDisplayDiv} key={li} id={i}>
                            <div className={classes.Column1}>{li[0]}</div>
                            <div className={classes.Column1}>{li[1]}</div>
                            <div className={classes.Button1} onClick={deleteClick}>Delete</div>
                        </div>
                    )}
                    )
                }
                </div>
            </div>
        </div>
    )
}
export default Todo
