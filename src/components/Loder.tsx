import { Box } from '@mui/material';
import { Oval } from 'react-loader-spinner';

const Loader = () => {
	return (
		<Box component='div' sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%', mt: '50px'}}>
			<Oval
				height={60}
				width={60}
				color='#c5c5c5'
				wrapperStyle={{}}
				wrapperClass=''
				visible={true}
				ariaLabel='oval-loading'
				secondaryColor='#f6f6f6'
				strokeWidth={4}
				strokeWidthSecondary={4}
			/>
		</Box>
	);
};

export default Loader;
