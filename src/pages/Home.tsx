import React, { useEffect, useState } from 'react';
import SearchBar from '../components/SearchBar/SearchBar';
import { getArticles } from '../redux/apiCalls';
import { useAppDispatch, useAppSelector } from '../redux/hooks';

const Home = () => {
	const data = useAppSelector((state) => state.article);
	const dispatch = useAppDispatch();

	useEffect(() => {
		getArticles('SpaceX', dispatch);
	}, [dispatch]);

	return (
		<main className='main__container'>
			<SearchBar />
		</main>
	);
};

export default Home;
