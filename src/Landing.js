import {
	Container,
	Grid,
	Button,
	makeStyles,
	Typography,
	IconButton,
	AppBar,
	Toolbar,
	SvgIcon,
} from '@material-ui/core';
import landingPic from './images/landing.jpg';
import { ReactComponent as instagramIcon } from './icons/instagram.svg';
import { ReactComponent as facebookIcon } from './icons/facebook.svg';

const useStyles = makeStyles({
	landingContainer: {
		height: '100vh',
		minHeight: 'fit-content',
		width: '100%',
		padding: '0px',
		backgroundImage:
			'linear-gradient(to bottom, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(' +
			landingPic +
			')',
		backgroundRepeat: 'no-repeat',
		backgroundPosition: 'center center',
		backgroundSize: 'cover',
		backgroundAttachment: 'fixed',
		margin: '0',
	},
	landingButton: {
		color: 'rgba(173, 19, 187)',
		textShadow: '-2px 3px 2px rgba(173, 19, 187, 0.6);',
	},
	title: {
		fontFamily: 'title',
		color: 'rgba(173, 19, 187)',
		textShadow: '-3px 5px 3px rgba(173, 19, 187, 0.6);',
		marginBottom: '130px',
	},
	toolbarIcon: {
		fontSize: '50px',
		color: 'rgba(173, 19, 187)',
		paddingLeft: '10px',
	},
});

function Landing(props) {
	const classes = useStyles();
	return (
		<Container maxWidth={false} className={classes.landingContainer}>
			{/* <div className={classes.landingFrostedCover} /> */}
			<AppBar position='static' style={{ background: 'transparent' }}>
				<Toolbar style={{ textAlign: 'right' }}>
					<Grid justify='space-between' container>
						<Grid item />

						<Grid item style={{ paddingRight: '5%' }}>
							<a href='https://www.instagram.com/foxs.shots'>
								<IconButton edge='end'>
									<SvgIcon
										className={classes.toolbarIcon}
										component={instagramIcon}
										viewBox='0 0 600 476.6'
									/>
								</IconButton>
							</a>

							<a href='https://www.facebook.com/foxs.shots/'>
								<IconButton edge='end'>
									<SvgIcon
										className={classes.toolbarIcon}
										component={facebookIcon}
										viewBox='0 0 600 476.6'
									/>
								</IconButton>
							</a>
						</Grid>
					</Grid>
				</Toolbar>
			</AppBar>
			<Grid
				style={{
					marginTop: '50px',
				}}
				direction='column'
				container
				alignItems='center'
				justify='space-evenly'>
				<Grid item>
					<Typography className={classes.title} variant='h1'>
						Fox's Shots Photography
					</Typography>
				</Grid>
				<Grid item container alignItems='center' justify='center' spacing={5}>
					<Grid item>
						<IconButton
							onClick={() => {
								props.scrollTo('peopleRef');
							}}>
							<Typography className={classes.landingButton} variant='h3'>
								People
							</Typography>
						</IconButton>
					</Grid>
					<Grid item>
						<IconButton
							onClick={() => {
								props.scrollTo('placesRef');
							}}>
							<Typography className={classes.landingButton} variant='h3'>
								Places
							</Typography>
						</IconButton>
					</Grid>
					<Grid item>
						<IconButton
							onClick={() => {
								props.scrollTo('thingsRef');
							}}>
							<Typography className={classes.landingButton} variant='h3'>
								Things
							</Typography>
						</IconButton>
					</Grid>
				</Grid>
			</Grid>
			{/* <img className={classes.landingPic} src={landingPic} /> */}
		</Container>
	);
}

export default Landing;
