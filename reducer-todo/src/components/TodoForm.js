import React, { useState } from "react";

const TodoForm = props => {
    
    const [newItem, setNewItem] = useState("")

    const handleChanges = e => {
        setNewItem(e.target.value);
      };

    const addButton = e => {
        e.preventDefault();
        props.addItem(newItem);
        setNewItem("");
    }




    return(
        <div>
            <form>
                    <input
                        onChange={handleChanges}
                        type="text" name="item" 
                        placeholder="Task..."
                    />
                    <button onClick={addButton}>Add</button>
                    <button >Clear Completed</button>
            </form>
        </div>
    )

}

export default TodoForm;