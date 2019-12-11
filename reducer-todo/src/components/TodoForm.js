import React, { useState } from "react";

const TodoForm = props => {
    
    const [newItem, setNewItem] = useState("")

    const handleChanges = e => {
        setNewItem(e.target.value);
      };

    const submitForm= e => {
        e.preventDefault();
        props.addItem(newItem);
        setNewItem("");
    }

    return(
        <div>
            <form onSubmit={submitForm}>
                <input
                    value={newItem}
                    onChange={handleChanges}
                    type="text" name="item" 
                />
                <button>Add</button>
            </form>
        </div>
    )

}

export default TodoForm;