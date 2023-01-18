import './articleCard.scss';
import {
	Button,
	Card,
	CardActionArea,
	CardActions,
	CardContent,
	CardMedia,
	Grid,
	Typography,
} from '@mui/material';
import React from 'react';
import Highlighter from 'react-highlight-words';
import { formatDate } from '../../../helpers/formatDate';
import { Box } from '@mui/system';
import calendarIcon from './img/calendar.png';
import arrowRight from './img/arrow-right.png';
import { useNavigate } from 'react-router-dom';

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

const ArticleCard = ({
	article,
	keywords,
}: {
	article: Article;
	keywords: string;
}) => {
	const navigate = useNavigate();
	let date: Date = new Date(article.publishedAt);
	return (
		<Card
			className='card__container'
			sx={{ boxShadow: '0px 8px 24px rgba(0, 0, 0, 0.05)' }}
		>
			<Box
				component='div'
				className='card__action-area'
				sx={{ display: 'flex' }}
			>
				<CardMedia
					component='img'
					height='217'
					width='400'
					image={article.imageUrl}
					alt='Article'
				/>
				<CardContent className='card__content' sx={{ p: '25px' }}>
					<Typography
						gutterBottom
						sx={{
							color: '#363636',
							fontSize: '14px',
							opacity: 0.6,
							display: 'flex',
							alignItems: 'baseline',
						}}
						component='p'
					>
						<img src={calendarIcon} alt='calendar' className='calendar-icon' />
						{formatDate(date)}
					</Typography>
					<Box className='card__content-bottom' component='div'>
						<Typography gutterBottom component='h3' id='card__title'>
							<Highlighter
								searchWords={[keywords]}
								autoEscape={true}
								textToHighlight={article.title}
							/>
						</Typography>
						<Typography
							id='card__description'
							sx={{ lineHeight: '24px' }}
							variant='body2'
							color='text.secondary'
							component='div'
						>
							<Highlighter
								searchWords={[keywords]}
								autoEscape={true}
								textToHighlight={`${article.summary.substring(0, 100)}...`}
							/>
						</Typography>
					</Box>
				</CardContent>
			</Box>
			<CardActions sx={{ px: '25px' }}>
				<Button
					onClick={() => navigate(`/articles/${article.id}`)}
					size='small'
					color='inherit'
					sx={{ fontWeight: 700, fontSize: '16px' }}
				>
					Read more
					<img src={arrowRight} alt='Arrow right' className='arrow-icon' />
				</Button>
			</CardActions>
		</Card>
	);
};

export default ArticleCard;
