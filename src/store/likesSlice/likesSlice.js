import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {fetchTodo} from "../todoSlice/todoSlice";
import axios from "axios";
// getAll likesDislikes from server
export const fetchLikesDislikes = createAsyncThunk("fetchLikesDislikes", async (id) => {
  console.log("pesho", id);
  const url = "api/getLikeDislike";
  return await axios.get(`${url}/:${id}`)
    .then(response => {
      let a = response.data;
      console.log(a);
    }).catch(function (error) {
      console.log(error);
    });
});


const initialState = {
  likes: 0,
  dislikes: 0,
  error: false,
  status: "idle"
};

const likesSlice = createSlice({
  name: "likesDislikes",
  initialState,
  reducers: {
    incrementLike: (state) => {
      state.likes += 1;
    },
    incrementDislike: (state) => {
      state.dislikes += 1;
    },
  },
  extraReducers: builder => {
    builder.addCase(fetchLikesDislikes.pending, (state, action) => {
      state.status = "loading";
      state.isLoading = true;
    });
    builder.addCase(fetchLikesDislikes.fulfilled, (state, action) => {
      let likesDislikesArr = [];
      state.isLoading = false;
      state.status = "succeeded";
      likesDislikesArr.push({
        tour_id: action.payload.id,
        likes: action.payload.likes,
        dislikes: action.payload.dislikes,
      });
      state.data = likesDislikesArr[0];
    });
    builder.addCase(fetchTodo.rejected, (state, action) => {
      state.status = "failed";
      state.error = true;
      state.error = action.error.message;
    });
  }
});

export const {incrementLike, incrementDislike} = likesSlice.actions;

export default likesSlice.reducer;
