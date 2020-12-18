import {
	Container,
	Grid,
	Button,
	makeStyles,
	Typography,
	IconButton,
	Paper,
	Box,
	useRef,
} from '@material-ui/core';
import Carousel from 'react-material-ui-carousel';

import people1 from './images/people/13.jpg';
import people2 from './images/people/albsecond.jpg';
import people3 from './images/people/attempt2edit9.jpg';
import people4 from './images/people/bityourtoe-10.jpg';
import people5 from './images/people/greg2-23.jpg';

const peoplePicList = [people1, people2, people3, people4, people5];

const useStyles = makeStyles({
	peopleContainer: {
		height: 'fit-content',
		minHeight: 'fit-content',
		width: '100%',
		padding: '0px',
		backgroundColor: 'black',
		color: 'white',
		paddingTop: '30px',
	},
	carouselPic: {
		backgroundRepeat: 'no-repeat',
		backgroundPosition: 'center center',
		backgroundSize: 'cover',
		height: '500px',
		width: '100%',
	},
});

export default function People(props) {
	const classes = useStyles();

	return (
		<Container maxWidth={false} className={classes.peopleContainer}>
			<Grid container alignItems='center' justify='center'>
				<Grid item xs={12}>
					<Typography variant='h2' style={{ fontFamily: 'title' }}>
						People
					</Typography>
				</Grid>
				<Box style={{ width: '450px' }}>
					<Carousel animation='slide' interval={4000}>
						{peoplePicList.map((cur, i) => {
							return (
								<Paper
									className={classes.carouselPic}
									style={{ backgroundImage: 'url(' + cur + ')' }}></Paper>
							);
						})}
					</Carousel>
				</Box>
			</Grid>
		</Container>
	);
}
