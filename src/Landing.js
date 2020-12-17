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
		width: '100vw',
		padding: '0px',
		backgroundImage:
			'linear-gradient(to bottom, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(' +
			landingPic +
			')',
		backgroundRepeat: 'no-repeat',
		backgroundPosition: 'center center',
		backgroundSize: 'cover',
		backgroundAttachment: 'fixed',
	},
	landingButton: {
		color: 'rgba(173, 19, 187)',
		textShadow: '-2px 3px 2px rgba(173, 19, 187, 0.6);',
	},
	title: {
		fontFamily: 'title',
		color: 'rgba(173, 19, 187)',
		textShadow: '-3px 5px 3px rgba(173, 19, 187, 0.6);',
	},
	toolbarIcon: {
		fontSize: '50px',
		color: 'rgba(173, 19, 187)',
		paddingLeft: '10px',
	},
});

function Landing() {
	const classes = useStyles();
	return (
		<Container className={classes.landingContainer}>
			{/* <div className={classes.landingFrostedCover} /> */}
			<AppBar position='static' style={{ background: 'transparent' }}>
				<Toolbar style={{ textAlign: 'right' }}>
					<Grid justify='space-between' container>
						<Grid item />

						<Grid item style={{ paddingRight: '5%' }}>
							<IconButton edge='end'>
								<SvgIcon
									className={classes.toolbarIcon}
									component={instagramIcon}
									viewBox='0 0 600 476.6'
								/>
							</IconButton>
							<IconButton edge='end'>
								<SvgIcon
									className={classes.toolbarIcon}
									component={facebookIcon}
									viewBox='0 0 600 476.6'
								/>
							</IconButton>
						</Grid>
					</Grid>
				</Toolbar>
			</AppBar>
			<Grid
				style={{
					height: '100%',
				}}
				container
				direction='row'
				alignItems='center'
				justify='center'>
				<Grid item xs={12}>
					<Typography className={classes.title} variant='h1'>
						Fox's Shots Photography
					</Typography>
				</Grid>
				<Grid
					item
					container
					xs={12}
					alignItems='center'
					justify='center'
					spacing={5}>
					<Grid item>
						<IconButton>
							<Typography className={classes.landingButton} variant='h3'>
								People
							</Typography>
						</IconButton>
					</Grid>
					<Grid item>
						<IconButton>
							<Typography className={classes.landingButton} variant='h3'>
								Places
							</Typography>
						</IconButton>
					</Grid>
					<Grid item>
						<IconButton>
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
