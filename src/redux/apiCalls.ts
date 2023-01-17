import { request } from '../services/api';
import {
	getArticlesStart,
	getArticlesSuccess,
	getArticlesFailure,
} from './reducers/articlesSlice';
import { AppDispatch } from './store';



export const getArticles = async (keyWord: string, dispatch: AppDispatch) => {
	dispatch(getArticlesStart());
	try {
		const res = await request.get(
			`/articles?title_contains=${keyWord}&summary_contains=${keyWord}`
		);
		dispatch(getArticlesSuccess(res.data));
	} catch (err) {
		dispatch(getArticlesFailure());
	}
};
