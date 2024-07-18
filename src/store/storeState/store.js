import {configureStore} from "@reduxjs/toolkit";
import {todoSlice} from "../todoSlice/todoSlice";

const store = configureStore({
  reducer: {
    todo: todoSlice,
    // comments: commentsSlice,
    // likes: likesSlice,
    // articlesId: articleSlice,
    // getComments: articleCommentsSlice

  }
});

export default store;
