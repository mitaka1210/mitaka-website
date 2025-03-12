import { configureStore } from '@reduxjs/toolkit';
import articlesSlice from '../getArticles/getArticlesSlice';
import sectionByIdSlice from '../articlesSectionById/articlesSectionByIdSlice';
import createAccountSlice from "@/store/createAccount/createAccountSlice";
import authSlice from "@/store/login/loginSlice";
import {articlesLikesDislikes} from "@/store/api/likesSlice";
const store = configureStore({
 reducer: {
  articles: articlesSlice,
  sections: sectionByIdSlice,
  createAccount: createAccountSlice,
  auth: authSlice,
  [articlesLikesDislikes.reducerPath]: articlesLikesDislikes.reducer, // 🔹 Добавяме API Reducer
 },
 middleware: (getDefaultMiddleware) =>
     getDefaultMiddleware().concat(articlesLikesDislikes.middleware), // 🔹 Добавяме API Middleware
});

export default store;
