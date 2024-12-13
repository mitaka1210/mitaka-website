import {configureStore} from "@reduxjs/toolkit";
import commentsSlice from "../addComments/addCommentSlice";
import articlesSlice from "../getAllArticles/getAllArticlesSlice";
import likesSlice from "../likesSlice/likesSlice";
import articleCommentsSlice from "../getCommentsForArticle/getCommentSlice";

const store = configureStore({
    reducer: {
        articles: articlesSlice
    }
});

export default store;
