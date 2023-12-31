const delayTheCall = (store) => (next) => async (action) => {
  if (action.type == "todo/addTodo") {
    console.log("i am delaying!!!");
    console.log("action1", action);
    setTimeout(() => {
      next(action);
    }, 2000);
    return; //to stop here. otherwise it'll go to line no 10
  }
  next(action); //for other dispatch except "todo/addTodo"
};
const fetchTodosData = (store) => (next) => async (action) => {
  if (typeof action == "function") {
    // action(next);//for fetchOne todo format
    action(store.dispatch); //for fetchFive todo format

    return; //to stop here. otherwise it'll go to line no 27
  }
  next(action); //for other dispatch except "todo/customAction"
};

module.exports = {
  delayTheCall,
  fetchTodosData,
};
