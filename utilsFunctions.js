const fetch = require("node-fetch");

const fetchOneTodos = async (next) => {
  // if (action.type == "todo/customAction") {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/todos?_limit=1"
  );
  const todos = await response.json();
  next({
    type: "todo/loadTodo",
    payload: {
      todo: todos,
    },
  });
};
const fetchFiveTodos = async (dispatch) => {
  // if (action.type == "todo/customAction") {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/todos?_limit=5"
  );
  const todos = await response.json();
  dispatch({
    type: "todo/loadTodo",
    payload: {
      todo: todos,
    },
  });
};
module.exports = { fetchOneTodos, fetchFiveTodos };
