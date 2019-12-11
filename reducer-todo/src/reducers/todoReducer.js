export const initialState = {
    todo: [
        {
            task: 'Learn about reducer',
            completed: false,
            id: 3892987589
        }
    ]
  };

  export const reducer = (state, action) => {
      switch(action.type){
        case "ADD_TODO":
            const newItem = {
                task: action.payload,
                completed: false,
                id: Date.now()
            }
            return {
                ...state,
                todo: [...state.todo, newItem]
              }
        case "TOGGLE_COMPLETE":
            return {
                ...state,
                todo: state.todo.map(item => {
                    if (action.payload === item.id) {
                        return {
                            ...item,
                            completed: !item.completed
                        }
                    }
                    return item;
                })
            }
        case "CLEAR_COMPLETE":
            return {
                ...state,
                todo: state.todo.filter(item => !item.completed)
            }
        default:
            return state;
      }
  }