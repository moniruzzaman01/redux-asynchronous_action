const store = require("./app/store");
const { fetchTodos, todosActions } = require("./features/todos/todosSlice");

//subscribe
store.subscribe(() => {
  console.log(JSON.stringify(store.getState()));
});

//dispatch
store.dispatch(fetchTodos());
// store.dispatch(todosActions.hello());
