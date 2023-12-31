const { createStore, applyMiddleware } = require("redux");
const { delayTheCall } = require("./middlewares");
const fetch = require("node-fetch");

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
const store = createStore(reducer, applyMiddleware(delayTheCall));

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
store.dispatch({
  type: "todo/customAction",
});
