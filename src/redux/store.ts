import { configureStore } from '@reduxjs/toolkit';
import articleReducer from './reducers/articlesSlice';

export const store = configureStore({
	reducer: { article: articleReducer },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
