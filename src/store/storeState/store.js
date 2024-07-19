import {configureStore} from "@reduxjs/toolkit";
import todoSlice from "../todoSlice/todoSlice";
import commentsSlice from "../addComments/addCommentSlice";
import likesSlice from "../likesSlice/likesSlice";
import articleCommentsSlice from "../getCommentsForArticle/getCommentSlice";

const store = configureStore({
  reducer: {
    todo: todoSlice,
    comments: commentsSlice,
    likes: likesSlice,
    getComments: articleCommentsSlice
  }
});

export default store;
