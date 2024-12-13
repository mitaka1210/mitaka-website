// app/rootReducer.js
import {combineReducers} from "@reduxjs/toolkit";
import {todoSlice} from "../getAllArticles/getAllArticlesSlice";

const rootReducer = combineReducers({
  todo: todoSlice,
  // Добавете други редюсъри тук, ако имате
});

export default rootReducer;
