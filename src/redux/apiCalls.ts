import { request } from '../services/api';
import {
	getArticlesStart,
	getArticlesSuccess,
	getArticlesFailure,
	getOneArticleStart,
	getOneArticleSuccess,
	getOneArticleFailure,
} from './reducers/articlesSlice';
import { AppDispatch } from './store';

export const getArticles = async (keyWords: string, dispatch: AppDispatch) => {
	dispatch(getArticlesStart());
	try {
		if (keyWords !== '' || keyWords.length !== 0) {
			const res = await request.get(
				`/articles?title_contains=${keyWords}&summary_contains=${keyWords}`
			);
			dispatch(getArticlesSuccess(res.data));
		} else {
			dispatch(getArticlesSuccess([]));
		}
	} catch (err) {
		dispatch(getArticlesFailure());
	}
};
export const getOneArticle = async (id: number, dispatch: AppDispatch) => {
	dispatch(getOneArticleStart());
	try {
		const res = await request.get(`/articles/${id}`);
		dispatch(getOneArticleSuccess(res.data));
	} catch (err) {
		dispatch(getOneArticleFailure());
	}
};
