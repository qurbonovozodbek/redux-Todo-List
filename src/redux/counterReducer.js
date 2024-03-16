const defaultState = {
    todo: [],
  };
  
  export function counterReducer(state = defaultState, action) {
    switch (action.type) {
      case "ADD":
        return {
          ...state,
          todo: [...state.todo, action.payload],
        };
      case "DELETE":
        return {
          ...state,
          todo: state.todo.filter((el) => el.id !== action.payload),
        };
      case "EDIT":
        return {
          ...state,
          todo: state.todo.map((el) =>
            el.id === action.payload.id ? { ...el, ...action.payload } : el
          ),
        };
      default:
        return state;
    }
  }