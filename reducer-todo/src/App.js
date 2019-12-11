import React, { useReducer } from 'react';

import './App.css';

import TodoList from "./components/TodoList"
import TodoForm from "./components/TodoForm";
import { initialState, reducer } from "./reducers/todoReducer"

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addItem = (item) => {
    dispatch({type: "ADD_TODO", payload: item})
  }

  const toggleComplete = itemId => {
    dispatch({type: "TOGGLE_COMPLETE", payload: itemId})
  }

  const clearComplete = () => {
    dispatch({type: "CLEAR_COMPLETE"})
  }

  return (
    <div className="App">
      <h1>Reducer Todo App</h1>
      <TodoForm addItem={addItem} />
      <TodoList todo={state.todo} toggleComplete={toggleComplete} clearComplete={clearComplete}/>
    </div>
  );
}

export default App;
