const { createStore, applyMiddleware } = require("redux");
const { delayTheCall, fetchTodosData } = require("./middlewares");
const fetch = require("node-fetch");
const { fetchOneTodos, fetchFiveTodos } = require("./utilsFunctions");

//initial state
const initialState = [];

//reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "todo/addTodo":
      return [
        ...state,
        {
          ...action.payload,
        },
      ];
    case "todo/loadTodo":
      return [...state, ...action.payload.todo];
    default:
      return state;
  }
};

//store
const store = createStore(
  reducer,
  applyMiddleware(delayTheCall, fetchTodosData)
);

//subscribe
store.subscribe(() => {
  console.log(`state is ${JSON.stringify(store.getState())}`);
});

//action dispatch
// store.dispatch({
//   type: "todo/addTodo",
//   payload: {
//     todo: "Have to complete redux as soon as possible!!!",
//   },
// });
// store.dispatch({
//   type: "todo/loadTodo",
//   payload: {
//     todo: ["hello", "hello1"],
//   },
// });
store.dispatch(fetchFiveTodos);
