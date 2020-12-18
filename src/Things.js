import * as React from 'react';

import {
	Container,
	Grid,
	Button,
	makeStyles,
	Typography,
	IconButton,
	Paper,
	Box,
} from '@material-ui/core';

function importAll(r) {
	return r.keys().map(r);
}

const thingPicList = importAll(
	require.context('./images/things', false, /\.(png|jpe?g|svg)$/)
);

const useStyles = makeStyles({
	thingsContainer: {
		height: 'fit-content',
		minHeight: '100vh',
		width: '100vw',
		padding: '0px',
		backgroundColor: 'black',
		color: 'white',
		paddingTop: '30px',
	},
	paperForThingPic: {
		backgroundRepeat: 'no-repeat',
		backgroundPosition: 'center center',
		backgroundSize: 'cover',
		height: '500px',
		width: '100%',
		marginBottom: '20px',
	},
});

export default function Things() {
	const classes = useStyles();
	return (
		<Container maxWidth={false} className={classes.thingsContainer}>
			<Typography variant='h2' style={{ fontFamily: 'title' }}>
				Things
			</Typography>
			<Grid container justify='space-evenly'>
				{thingPicList.map((cur) => {
					return (
						<Grid item xs={5}>
							<Paper
								className={classes.paperForThingPic}
								style={{
									backgroundImage: 'url(' + cur.default + ')',
								}}></Paper>
						</Grid>
					);
				})}
			</Grid>
		</Container>
	);
}
