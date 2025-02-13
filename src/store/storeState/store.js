import { configureStore } from '@reduxjs/toolkit';
import articlesSlice from '../getArticles/getArticlesSlice';
import sectionByIdSlice from '../articlesSectionById/articlesSectionByIdSlice';
import createAccountSlice from "@/store/createAccount/createAccountSlice";
import authSlice from "@/store/login/loginSlice";
const store = configureStore({
 reducer: {
  articles: articlesSlice,
  sections: sectionByIdSlice,
  createAccount: createAccountSlice,
  auth: authSlice
 },
});

export default store;
