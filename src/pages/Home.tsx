import { Box } from '@mui/material';
import React, { useEffect, useState } from 'react';
import ArticlesList from '../components/ArticlesList/ArticlesList';
import Loader from '../components/Loder';
import SearchBar from '../components/SearchBar/SearchBar';
import { getArticles } from '../redux/apiCalls';
import { useAppDispatch, useAppSelector } from '../redux/hooks';

interface Article {
	id: number;
	featured: boolean;
	title: string;
	url: string;
	imageUrl: string;
	newsSite: string;
	summary: string;
	publishedAt: string;
	launches: {
		id: string;
		provider: string;
	}[];
	events: {
		id: string;
		provider: string;
	}[];
}

const Home = () => {
	const data = useAppSelector((state) => state.article.articles);
	const isFetching = useAppSelector((state) => state.article.isFetching);
	const dispatch = useAppDispatch();
	const [keywords, setKeywords] = useState<string>('');
	const [sortedArticles, setSortedArticles] = useState<Article[]>([]);

	useEffect(() => {
		const sorted = [...data];
		sorted.sort((a, b) => {
			return b.title.includes(keywords)
				? b.summary.includes(keywords)
					? 1
					: -1
				: -1;
		});
		setSortedArticles(sorted);
	}, [data]);

	useEffect(() => {
		getArticles(keywords, dispatch);
	}, [dispatch, keywords]);

	return (
		<Box
			component='main'
			className='main__container'
			sx={{ pt: '50px', pb: '63px' }}
		>
			<SearchBar setKeywords={setKeywords} keywords={keywords} />
			{isFetching ? (
				<Loader />
			) : (
				<ArticlesList keywords={keywords} articles={sortedArticles} />
			)}
		</Box>
	);
};

export default Home;
