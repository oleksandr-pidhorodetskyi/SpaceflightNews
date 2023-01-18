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
	id: number;
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
		//GET ALL ARTICLES WHICH CONTAINS IN TITLE AND DESC KEYWORD
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
		//GET ONE ARTICLE BY ID
		getOneArticleStart: (state) => {
			state.isFetching = true;
			state.error = false;
		},
		getOneArticleSuccess: (state, action: PayloadAction<Article>) => {
			state.isFetching = false;
			state.currentArticle = action.payload;
		},
		getOneArticleFailure: (state) => {
			state.isFetching = false;
			state.error = true;
		},
	},
});

export const {
	getArticlesStart,
	getArticlesSuccess,
	getArticlesFailure,
	getOneArticleStart,
	getOneArticleSuccess,
	getOneArticleFailure,
} = articleSlice.actions;
export default articleSlice.reducer;
