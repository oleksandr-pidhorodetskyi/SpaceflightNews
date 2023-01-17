import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Article from './pages/Article';
import './app.scss';
// import Container from '@mui/material/Container';

const App = () => {
	return (
		<Routes>
			<Route path='/' element={<Home />} />
			<Route path='/articles/:id' element={<Article />} />
		</Routes>
	);
};

export default App;
