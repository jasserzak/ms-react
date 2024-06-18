import {
  ADD_TASK,
  EDIT_TASK,
  FILTER_TASK,
  TOGGLE_COMPLETED_TASK,
  UPDATE_TASK,
} from "../actions/types";

const initialState = {
  todos: [
    {
      id: 1,
      description: "task1",
      isDone: false,
    },
    {
      id: 2,
      description: "task2",
      isDone: false,
    },
  ],
  filteredTodos: [],
  current: null,
};
const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      return { ...state, todos: [...state.todos, action.payload] };

    case TOGGLE_COMPLETED_TASK:
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload ? { ...todo, isDone: !todo.isDone } : todo
        ),
      };
    case FILTER_TASK:
      return {
        ...state,
        filteredTodos:
          action.payload === "complete"
            ? state.todos.filter((todo) => todo.isDone)
            : action.paylaod === "incomplete"
            ? state.todos.filter((todo) => !todo.isDone)
            : [],
      };
    case EDIT_TASK:
      return { ...state, current: action.payload };
    case UPDATE_TASK:
      return {
        ...state,
        current: null,
        todos: state.todos.map((todo) =>
          todo.id === action.payload.id ? { ...action.payload } : todo
        ),
      };

    default:
      return state;
  }
};

export default taskReducer;
