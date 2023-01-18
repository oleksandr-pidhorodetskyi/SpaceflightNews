import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Article from './pages/Article/Article';
import './App.scss';
import { createTheme, ThemeProvider } from '@mui/material';
const App = () => {
	const THEME = createTheme({
		typography: {
			fontFamily: `'Montserrat', sans-serif;`,
			fontSize: 16,
			fontWeightLight: 300,
			fontWeightRegular: 400,
			fontWeightMedium: 500,
		},
	});
	return (
		<ThemeProvider theme={THEME}>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/articles/:id' element={<Article />} />
			</Routes>
		</ThemeProvider>
	);
};

export default App;
