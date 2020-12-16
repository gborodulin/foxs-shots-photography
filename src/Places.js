import {
	Container,
	makeStyles,
	Box,
	Paper,
	Typography,
	Grid,
} from '@material-ui/core';
import Carousel from 'react-material-ui-carousel';

import place1 from './images/places/editsround2-8.jpg';
import place2 from './images/places/editsround2-14.jpg';
import place3 from './images/places/FALLEDIT1.jpg';
import place4 from './images/places/montauk2.jpg';
import place5 from './images/places/raritan1.jpg';

const placesPicList = [place1, place2, place3, place4, place5];

const useStyles = makeStyles({
	placesContainer: {
		height: '100vh',
		minHeight: 'fit-content',
		width: '100vw',
		paddingTop: '30px',
		backgroundColor: 'black',
		color: 'white',
		display: 'grid',
	},
	gridContainer: {
		display: 'grid',
		gridTemplateColumns: '10% 10% 10% 10% 10% 10% 10% 10% 10% 10%',
		gridTemplateRows: '10% 10% 10% 10% 10% 10% 10% 10% 10% 10% ',
		// width: '100%',
		height: '550px',
		padding: '20px',
		gap: '3%',
	},
	placesPic: {
		backgroundRepeat: 'no-repeat',
		backgroundPosition: 'center center',
		backgroundSize: 'cover',
		zIndex: '1',
		'&:hover': {
			zIndex: '1000',
		},
	},
	picNum0: {
		gridColumn: '3 / 7',
		gridRow: '3 / 8',
		backgroundImage: ' url(' + place1 + ')',
		zIndex: '900',
	},
	picNum1: {
		gridColumn: '1 / 5',
		gridRow: '1 / 5',
		backgroundImage: ' url(' + place2 + ')',
	},
	picNum2: {
		gridColumn: '5 / 9',
		gridRow: '1 / 5',
		backgroundImage: ' url(' + place3 + ')',
	},
	picNum3: {
		gridColumn: '1 / 5',
		gridRow: '6 / 10',
		backgroundImage: ' url(' + place4 + ')',
	},
	picNum4: {
		gridColumn: '5 / 9',
		gridRow: '6 / 10',
		backgroundImage: ' url(' + place5 + ')',
	},
});

export default function Places() {
	const classes = useStyles();

	return (
		<Container className={classes.placesContainer}>
			<Typography
				variant='h2'
				style={{
					fontFamily: 'title',
					height: '20px',
				}}>
				Places
			</Typography>

			<div className={classes.gridContainer}>
				{placesPicList.map((cur, i) => {
					return (
						<Paper
							elevation={3}
							className={[classes.placesPic, classes[`picNum${i}`]]}></Paper>
					);
				})}
			</div>
		</Container>
	);
}
