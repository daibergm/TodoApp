const ADD_TODO = 'ADD_TODO';
const UPDATE_TODO = 'UPDATE_TODO';
const DELETE_TODO = 'DELETE_TODO';

const initialState = {
  toDos: [],
};

export const addTodo = todo => ({ type: ADD_TODO, todo });

export const updateTodo = todo => ({ type: UPDATE_TODO, todo });

export const deleteTodo = todo => ({ type: DELETE_TODO, todo });

function todoReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      return {
        toDos: [...state.toDos, action.todo],
      };

    case UPDATE_TODO: {
      const toDos = [...state.toDos];
      const indexOfUpdate = toDos.findIndex(
        todo => todo.date === action.todo.date,
      );

      toDos[indexOfUpdate] = action.todo;

      return {
        ...state,
        toDos,
      };
    }

    case DELETE_TODO:
      return {
        toDos: state.toDos.filter(todo => todo.date !== action.todo.date),
      };

    default:
      return state;
  }
}

export default todoReducer;
