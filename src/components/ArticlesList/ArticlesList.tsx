import { Box, Grid, Typography } from '@mui/material';
import React from 'react';
import ArticleCard from './components/ArticleCard';

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

const ArticlesList = ({
	articles,
	keywords,
}: {
	articles: Article[];
	keywords: string;
}) => {
	return (
		<Box component='section'>
			<Typography
				gutterBottom
				variant='h6'
				component='p'
				sx={{
					borderBottom: '1px solid #D9D9D9',
					fontWeight: 600,
					color: '#363636',
					fontSize: '16px',
					mb: '44px',
				}}
			>
				Results: {articles.length}
			</Typography>
			<Grid
				container
				spacing={{ xs: 5, sm: 3, md: 5, lg: 5 }}
			>
				{articles.map((el) => (
					<Grid
						item
						xs={12}
						sm={6}
						md={6}
						lg={4}
						key={el.id}
						sx={{
							width: '400px',
							display: 'flex',
							justifyContent: 'center',
						}}
					>
						<ArticleCard article={el} keywords={keywords} />
					</Grid>
				))}
			</Grid>
		</Box>
	);
};

export default ArticlesList;
