const { configureStore } = require("@reduxjs/toolkit");
const todosReducer = require("../features/todos/todosSlice");

//store
const store = configureStore({
  reducer: {
    todos: todosReducer,
  },
});

module.exports = store;
