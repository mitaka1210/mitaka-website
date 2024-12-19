import { configureStore } from '@reduxjs/toolkit';
import articlesSlice from '../getArticles/getArticlesSlice';
import sectionByIdSlice from '../articlesSectionById/articlesSectionByIdSlice';

const store = configureStore({
 reducer: {
  articles: articlesSlice,
  sections: sectionByIdSlice,
 },
});

export default store;
