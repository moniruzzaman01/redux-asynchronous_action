const { configureStore } = require("@reduxjs/toolkit");
const todosReducer = require("../features/todos/todosSlice");
const reduxLogger = require("redux-logger");
const logger = reduxLogger.createLogger();

//store
const store = configureStore({
  reducer: {
    todos: todosReducer,
  },
  middleware: (defaultMiddlewares) => defaultMiddlewares().concat(logger),
});

module.exports = store;
