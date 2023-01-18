import './article.scss';
import { Box, Button, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Loader from '../../components/Loder';
import { getOneArticle } from '../../redux/apiCalls';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import arrowLeft from './img/Arrow-left.png';

const Article = () => {
	const { id } = useParams();
	const dispatch = useAppDispatch();
	const navigate = useNavigate();

	const data = useAppSelector((state) => state.article.currentArticle);
	const isFetching = useAppSelector((state) => state.article.isFetching);

	useEffect(() => {
		getOneArticle(Number(id), dispatch);
	}, [dispatch, id]);
	return (
		<Box component='main'>
			{isFetching ? (
				<Loader />
			) : (
				<Box component='div' className='article__container'>
					<Box component='section' className='article__container-img'>
						<img className='article__image' src={data.imageUrl} alt='Article' />
					</Box>
					<Box component='div'>
						<Box
							component='article'
							className='main__container article__main'
						>
							<Box component='div' className='article__content'>
								<Box component='div' sx={{ mb: '50px', textAlign: 'center' }}>
									<Typography gutterBottom component='h2'>
										{data.title}
									</Typography>
								</Box>
								<Box component='div'>
									<Typography gutterBottom component='p'>
										{data.summary}
									</Typography>
								</Box>
							</Box>
							<Box component='div' className='article__action'>
								<Button
									onClick={() => navigate('/')}
									size='small'
									color='inherit'
									className='btn-underline-animation'
									sx={{ fontWeight: 700, fontSize: '16px' }}
								>
									<img
										src={arrowLeft}
										alt='arrow left'
										className='arrow-icon'
									/>
									Back to homepage
								</Button>
							</Box>
						</Box>
					</Box>
				</Box>
			)}
		</Box>
	);
};

export default Article;
