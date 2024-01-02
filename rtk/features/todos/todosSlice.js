const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

//initial state
const initialState = {
  isLoading: false,
  todos: [],
  error: "",
};

//fetch todos
const fetchTodos = createAsyncThunk("todos/fetchTodos", async () => {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/todos?_limit=5"
  );
  const todos = await response.json();
  return todos;
});

//create slice
const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    hello: () => {
      console.log("hey called");
    },
  },

  //this part is deprecated/removed

  //   extraReducers: {
  //     ["todos/fetchTodos/pending"]: (state, action) => {
  //       (state.isLoading = true), (state.error = "");
  //     },
  //     ["todos/fetchTodos/fulfilled"]: (state, action) => {
  //       (state.isLoading = false),
  //         (state.todos = action.payload),
  //         (state.error = "");
  //     },
  //     ["todos/fetchTodos/rejected"]: (state, action) => {
  //       (state.isLoading = true),
  //         (state.error = action.error.message),
  //         (state.todos = []);
  //     },
  //   },

  //this part is deprecated/removed

  extraReducers: (builder) => {
    builder.addCase(fetchTodos.pending, (state, action) => {
      (state.isLoading = true), (state.error = "");
    });
    builder.addCase(fetchTodos.fulfilled, (state, action) => {
      (state.isLoading = false),
        (state.todos = action.payload),
        (state.error = "");
    });
    builder.addCase(fetchTodos.rejected, (state, action) => {
      (state.isLoading = true),
        (state.error = action.error.message),
        (state.todos = []);
    });
  },
});

module.exports = todosSlice.reducer;
module.exports.fetchTodos = fetchTodos;
module.exports.todosActions = todosSlice.actions;
