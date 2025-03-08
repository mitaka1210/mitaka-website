import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchArticles = createAsyncThunk('getArticles', async () => {
 const response = await fetch('/api/getArticles');
 if ( !response.ok) {
  console.error('API Error:', response.statusText);
  throw new Error('Failed to fetch articles');
 }
 return await response.json();
});

const articlesSlice = createSlice({
 name: 'articles',
 initialState: {
  isLoading: false,
  data: [],
  error: false,
  status: 'idle',
 },
 reducers: {
  getAll(state, action) {
   state.todo.push(action.payload);
  },
  add(state, action) {
   state.data.push(action.payload);
  },
 },
 extraReducers: (builder) => {
  builder.addCase(fetchArticles.pending, (state, action) => {
   state.status = 'loading';
   state.isLoading = true;
  });
  builder.addCase(fetchArticles.fulfilled, (state, action) => {
   state.isLoading = false;
   let articlesArr = [];
   state.status = 'succeeded';
   for (let i = 0; i < action.payload.length; i++) {
    let createArticleDate = new Date(action.payload[i].createData).toLocaleString(undefined, {
     year: 'numeric',
     month: '2-digit',
     day: '2-digit',
     weekday: 'long',
    });
    articlesArr.push({
     create_article_date: createArticleDate,
     status: action.payload[i].status,
     id: action.payload[i].id,
     title: action.payload[i].title,
     sections: action.payload[i].sections,
     images: action.payload[i].images,
    });
   }
   //? return last created article first
   console.log('articlesArr', articlesArr);
   state.data = articlesArr;
  });
  builder.addCase(fetchArticles.rejected, (state, action) => {
   state.status = 'failed';
   state.error = true;
   state.error = action.error.message;
  });
 },
});

export const { add, getAll } = articlesSlice.actions;
export default articlesSlice.reducer;
