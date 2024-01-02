const { createStore, applyMiddleware } = require("redux");
const fetch = require("node-fetch");
const { thunk } = require("redux-thunk");

//initial state
const initialState = {
  isLoading: false,
  todos: [],
  error: "",
};

//actions
const todosLoadRequested = () => {
  return {
    type: "todosLoad/requested",
  };
};
const todosLoadSuccessfull = (todos) => {
  return {
    type: "todosLoad/successfull",
    payload: todos,
  };
};
const todosLoadFailed = (error) => {
  return {
    type: "todosLoad/failed",
    payload: error.message,
  };
};

//totoloader thunk func
const todoLoader = () => {
  return async (dispatch) => {
    console.log("hello");
    dispatch(todosLoadRequested());
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos?_limit=5"
      );
      const todos = await response.json();
      dispatch(todosLoadSuccessfull(todos));
    } catch (error) {
      dispatch(todosLoadFailed(error));
    }
  };
};

//reducer
const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case "todosLoad/requested":
      return {
        ...state,
        isLoading: true,
        error: "",
      };
    case "todosLoad/successfull":
      return {
        ...state,
        isLoading: false,
        todos: action.payload,
        error: "",
      };
    case "todosLoad/failed":
      return {
        ...state,
        isLoading: true,
        todos: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

//store
const store = createStore(todoReducer, applyMiddleware(thunk));

//subscribe
store.subscribe(() => {
  console.log(store.getState());
});

//dispatch
store.dispatch(todoLoader());
