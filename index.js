const Redux = require("redux");

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
const store = Redux.createStore(reducer);

//subscribe
store.subscribe(() => {
  console.log(`state is ${JSON.stringify(store.getState())}`);
});

//action dispatch
store.dispatch({
  type: "todo/addTodo",
  payload: {
    todo: "Have to complete redux as soon as possible!!!",
  },
});
