import React from "react"
import Todo from "./Todo"


const TodoList = props => {
    
    return (
        <div className="task-container">
            {props.todo.map(item => (
            <Todo key={item.id} item={item} 
            toggleComplete={props.toggleComplete}/>
            ))}
            <button onClick={props.clearComplete}>Clear Completed</button>
        </div>
    )
}

export default TodoList;


