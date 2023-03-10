import React, { useState, ChangeEvent, useEffect } from 'react';
import './searchBar.scss';
import { InputLabel } from '@mui/material';
import Input from '@mui/material/Input';
import Box from '@mui/material/Box';
import searchIcon from './img/search-icon.png';
import { useDebounce } from 'usehooks-ts';

interface SearchProps {
	setKeywords: React.Dispatch<React.SetStateAction<string>>;
	keywords: string;
}

const SearchBar = ({ setKeywords, keywords }: SearchProps) => {
	const [value, setValue] = useState<string>('');
	const debouncedValue = useDebounce<string>(value, 500);

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		e.preventDefault();
		setValue(e.target.value);
	};
	useEffect(() => {
		setKeywords(debouncedValue);
	}, [debouncedValue]);
	return (
		<Box component='div' className='search__container' sx={{ mb: '34px' }}>
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
					maxWidth: 600,
					height: 50,
					display: 'flex',
					alignItems: 'center',
					boxShadow: '0px 8px 24px rgba(0, 0, 0, 0.05)',
					borderRadius: '5px',
					mb: '6px',
				}}
			>
				<img className='search-icon' src={searchIcon} alt='search' />
				<Input
					id='searchBar__input'
					disableUnderline={true}
					sx={{ display: 'block', flex: 1, pr: 1 }}
					placeholder='The most successful IT companies in 2020'
					value={value}
					onChange={handleChange}
				/>
			</Box>
			<Box sx={{ maxWidth: 600, borderBottom: '1px solid #D9D9D9' }} />
		</Box>
	);
};

export default SearchBar;
