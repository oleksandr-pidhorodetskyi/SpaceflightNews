import { useEffect, useState } from 'react';
import './App.scss';
import { getArticles } from './redux/apiCalls';
import { useAppDispatch, useAppSelector } from './redux/hooks';


function App() {
	const data = useAppSelector((state) => state.article);
	const dispatch = useAppDispatch();
	useEffect(() => {
		getArticles('SpaceX', dispatch);
	}, [dispatch]);
	return (
		<div className='App'>
			<div>
				<a href='https://vitejs.dev' target='_blank'>
					<img src='/vite.svg' className='logo' alt='Vite logo' />
				</a>
			</div>
			<h1>Vite + React</h1>
			<button>Click to change</button>
			<div className='card'>
				<p>{data.currentArticle.title}</p>
			</div>
			<p className='read-the-docs'>
				Click on the Vite and React logos to learn more
			</p>
		</div>
	);
}

export default App;
