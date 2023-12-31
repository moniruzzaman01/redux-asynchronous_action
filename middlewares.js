const delayTheCall = (store) => (next) => async (action) => {
  if (action.type == "todo/addTodo") {
    console.log("i am delaying!!!");
    console.log("action1", action);
    setTimeout(() => {
      next(action);
    }, 5000);
    return; //to stop here. otherwise it'll go to line no 10
  }
  next(action); //for other dispatch except "todo/addTodo"
};
const fetchTodosData = (store) => (next) => async (action) => {
  if (action.type == "todo/customAction") {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos?_limit=5"
    );
    const todos = await response.json();
    console.log("action2", action);
    next({
      type: "todo/loadTodo",
      payload: {
        todo: todos,
      },
    });
    return; //to stop here. otherwise it'll go to line no 27
  }
  next(action); //for other dispatch except "todo/customAction"
};

module.exports = {
  delayTheCall,
  fetchTodosData,
};
