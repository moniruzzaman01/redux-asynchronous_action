const delayTheCall = (state) => (next) => async (action) => {
  if (action.type == "todo/addTodo") {
    console.log("i am delaying!!!");
    setTimeout(() => {
      next(action);
    }, 2000);
    return;
  } else if (action.type == "todo/customAction") {
    console.log("called");
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos?_limit=5"
    );
    const todos = await response.json();
    next({
      type: "todo/loadTodo",
      payload: {
        todo: todos,
      },
    });
    return;
  }
  next(action);
};

module.exports = {
  delayTheCall,
};
