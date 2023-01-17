import axios from 'axios';
import {
	getArticlesStart,
	getArticlesSuccess,
	getArticlesFailure,
} from './reducers/articlesSlice';
import { AppDispatch } from './store';

const BASE_URL = 'https://api.spaceflightnewsapi.net/v3/';
const request = axios.create({
	baseURL: BASE_URL,
});

export const getArticles = async (keyWord: string, dispatch: AppDispatch) => {
	dispatch(getArticlesStart());
	try {
		const res = await request.get(
			`/articles?title_contains=${keyWord}&summary_contains=${keyWord}`
		);
		console.log(res.data);
		dispatch(getArticlesSuccess(res.data));
	} catch (err) {
		dispatch(getArticlesFailure());
	}
};
