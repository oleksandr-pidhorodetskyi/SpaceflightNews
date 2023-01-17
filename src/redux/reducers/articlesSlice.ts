import { createSlice, PayloadAction } from '@reduxjs/toolkit';
interface Launches {
	id: string;
	provider: string;
}
interface Events {
	id: string;
	provider: string;
}
interface Article {
	id: 0;
	featured: boolean;
	title: string;
	url: string;
	imageUrl: string;
	newsSite: string;
	summary: string;
	publishedAt: string;
	launches: Launches[];
	events: Events[];
}

interface ArticleState {
	currentArticle: Article;
	articles: Article[];
	isFetching: boolean;
	error: boolean;
}

const initialState: ArticleState = {
	currentArticle: {
		id: 0,
		featured: false,
		title: '',
		url: '',
		imageUrl: '',
		newsSite: '',
		summary: '',
		publishedAt: '',
		launches: [],
		events: [],
	},
	articles: [],
	isFetching: false,
	error: false,
};

const articleSlice = createSlice({
	name: 'article',
	initialState,
	reducers: {
		//GET ALL
		getArticlesStart: (state) => {
			state.isFetching = true;
			state.error = false;
		},
		getArticlesSuccess: (state, action: PayloadAction<Article[]>) => {
			state.isFetching = false;
			state.articles = action.payload;
		},
		getArticlesFailure: (state) => {
			state.isFetching = false;
			state.error = true;
		},
	},
});

export const { getArticlesStart, getArticlesSuccess, getArticlesFailure } =
	articleSlice.actions;
export default articleSlice.reducer;
