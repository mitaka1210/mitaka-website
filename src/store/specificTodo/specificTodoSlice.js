import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import getTodo from "../../configurationAPI/api-endpoints";
// getAll likesDislikes from server
export const fetchLSpecificTodo = createAsyncThunk("fetchLSpecificTodo", async (id) => {
  return fetch(`${getTodo.GET_SPECIFIC_TODOS}/${id}`)
    .then(response => response.json())
    .then(json => {
      return json;
    });
});
const fetchImage = (file, path) => {
  if (file !== null && path !== null) {
    const blob = new Blob([new Uint8Array(file.data)], {type: `image/${path.split(".").pop()}`});
    return URL.createObjectURL(blob);
  }
};

const initialState = {
  likes: 0,
  dislikes: 0,
  data: [],
  error: false,
  status: "idle"
};

const articleSlice = createSlice({
  name: "getSpecificTodo",
  initialState,
  reducers: {
    resetState: (state) => {
      return initialState; // Нулиране на състоянието
    },
  },
  extraReducers: builder => {
    builder.addCase(fetchLSpecificTodo.pending, (state, action) => {
      state.status = "loading";
      state.isLoading = true;
    });
    builder.addCase(fetchLSpecificTodo.fulfilled, (state, action) => {
      let articlesData = [];
      state.isLoading = false;
      state.status = "succeeded";
      articlesData.push({
        description: action.payload.description,
        date: action.payload.date,
        currentTime: action.payload.time,
        header: action.payload.header,
        todoId: action.payload.todo_id,
        images: fetchImage(action.payload.file_data, action.payload.images_path)
      });
      state.data = articlesData;
    });
    builder.addCase(fetchLSpecificTodo.rejected, (state, action) => {
      state.status = "failed";
      state.error = true;
      state.error = action.error.message;
    });
  }
});

export const {resetState} = articleSlice.actions;

export default articleSlice.reducer;
