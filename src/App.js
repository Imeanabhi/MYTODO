import React, { useState } from 'react';
import Todolist from './Todolist.js';

const App = () => {
    const[task,setTask]=useState("")
    //stored in constant variable and set task variable used for resetting the task//
    //for putting all the things in a list//

    const [todos,setTodos]=useState("[]")
    const newtodos=[...todos,task];
    settodos(newtodos);
    setTask("");

    const changeHandler=e=>{
    setTask(e.target.value)
    }
    const deleteHandler=(indexValue) => {
        const newtodos = todos.filter((todo,index) => index!=indexValue);
        Settodos(newtodos);
    }

    const submitHandler=e=>{
    e.preventDefault();

    console.log(task);
    //console.log is used for checking whether the task the working properly or not//
    }
    return (
    <div>
        <center>
        <div className="card">
        < div className="card-body">
            <h5 className="card-title">Todo Management Application</h5>
            <form onSubmit={submitHandler}>
                <input size="30" type="text" name="task" value={task} onChange={changeHandler} /> &nbsp;&nbsp;
                <input type="submit" value="Add" name='add'/>
            </form>
            <Todolist todolist={todos}/>
            </div>
        </div>
        </center>
    </div>
    )
}

export default App