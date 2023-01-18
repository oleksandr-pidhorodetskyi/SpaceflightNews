import React, { useEffect, useState } from 'react';
import ArticlesList from '../components/ArticlesList/ArticlesList';
import Loader from '../components/Loder';
import SearchBar from '../components/SearchBar/SearchBar';
import { getArticles } from '../redux/apiCalls';
import { useAppDispatch, useAppSelector } from '../redux/hooks';

const Home = () => {
	const data = useAppSelector((state) => state.article.articles);
	const isFetching = useAppSelector((state) => state.article.isFetching);
	const dispatch = useAppDispatch();
	const [keywords, setKeywords] = useState<string>('');
	// const [articles, setArticles] = useState<Article[]>([]);

	useEffect(() => {
		getArticles(keywords, dispatch);
	}, [dispatch, keywords]);
	useEffect(() => {
		console.log(keywords);
	}, [keywords]);

	return (
		<main className='main__container'>
			<SearchBar setKeywords={setKeywords} keywords={keywords} />
			{isFetching ? (
				<Loader />
			) : (
				<ArticlesList keywords={keywords} articles={data} />
			)}
		</main>
	);
};

export default Home;
