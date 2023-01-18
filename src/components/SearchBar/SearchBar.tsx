import React from 'react';
import './searchBar.scss';
import { InputLabel } from '@mui/material';
import Input from '@mui/material/Input';
import Box from '@mui/material/Box';
import searchIcon from './img/search-icon.png';

interface SearchProps {
	setKeywords: React.Dispatch<React.SetStateAction<string>>;
	keywords: string;
}

const SearchBar = ({ setKeywords, keywords }: SearchProps) => {
	const handleChange = (e: any) => {
		e.preventDefault();
		setKeywords(e.target.value);
	};
	return (
		<Box component='div' sx={{ mb: '34px' }}>
			<InputLabel
				sx={{ fontWeight: 600, color: '#363636', mb: '10px' }}
				variant='standard'
			>
				Filter by keywords
			</InputLabel>
			<Box
				component='div'
				sx={{
					border: '1px solid #EAEAEA',
					width: 600,
					height: 50,
					display: 'flex',
					alignItems: 'center',
					boxShadow: '0px 8px 24px rgba(0, 0, 0, 0.05)',
					borderRadius: '5px',
					mb: '6px'
				}}
			>
				<img className='search-icon' src={searchIcon} alt='search' />
				<Input
					className='searchBar__input'
					disableUnderline={true}
					sx={{ display: 'block', flex: 1, pr: 1 }}
					placeholder='The most successful IT companies in 2020'
					value={keywords}
					onChange={handleChange}
				/>
			</Box>
			<Box sx={{ width: 600, borderBottom: '1px solid #D9D9D9' }} />
		</Box>
	);
};

export default SearchBar;
