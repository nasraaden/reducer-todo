import React from "react";

const Todo = props => {

    const toggle = () => {
        props.toggleComplete(props.item.id)
    }

    return(
        <div className="task-card">
            <div className={`item${props.item.completed ? " completed" : ""}`} key={props.item.id} onClick={toggle} >
                <p>{props.item.task}</p>
            </div>
        </div>
    )
}

export default Todo;

