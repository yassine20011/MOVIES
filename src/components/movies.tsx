import React from "react";
import axios from "axios";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import ShareIcon from '@mui/icons-material/Share';
import GradeIcon from '@mui/icons-material/Grade';
//import { Link } from "react-router-dom";
import Input from '@mui/material/Input';
import Popover from '@mui/material/Popover';
import PopupState, { bindTrigger, bindPopover } from 'material-ui-popup-state';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import Slide, { SlideProps } from '@mui/material/Slide';
import { useSnackbar } from 'notistack';


const url = `http://localhost:3000/Movies`;

const MostPopularMovies = axios.create({
	baseURL:
		"https://api.themoviedb.org/3/movie/popular?api_key=d10f44b1e231b0f9f3b46a16d5764210&language=en-US&page=1",
});



export default function Movies() {

	let [movies, setMovies] = React.useState([]);
	React.useEffect(() => {
		MostPopularMovies.get("").then((response) => {
			setMovies(response.data.results);
		});
	}, []);

	const { enqueueSnackbar } = useSnackbar();

	const handleClick = () => {
		enqueueSnackbar('Link copied to clipboard');
	};

	const ClipBoard = () => {
		navigator.clipboard.writeText(url);
		handleClick()
	}

	return (
		<React.Fragment>
			<Container maxWidth="lg">
				<div style={{ width: '100%' }}>
					<Box m={5} sx={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)' }}>
						{movies.map((movie, id) => (
							<Card key={id}  sx={{ maxWidth: 345, margin: "25px", display: 'flex', justiyContent: 'space-between', flexDirection: 'column' }}>
								<CardMedia
									component="img"
									alt={movie.original_title}
									image={"https://image.tmdb.org/t/p/w500/" + movie.poster_path}
									loading="lazy"
								/>
								<CardContent>

									<Typography
										sx={{ fontSize: 15 }}
										gutterBottom variant="h5"
										component="div">
										<GradeIcon
											sx={{
												color: '#FFD700',
												fontSize: 18, 
												position: "relative",
												bottom: 2
											}} />
										{parseFloat(movie.vote_average).toFixed(1)}
									</Typography>

									<Typography
										sx={{
											fontSize: 18
										}}
										gutterBottom variant="h5"
										component="div">
										{movie.title.length >= 23 ? movie.title.substr(0, movie.title.indexOf(':')) : movie.title}
									</Typography>

									<Typography
										variant="body2"
										color="text.secondary">
										{movie.overview.length >= 120 ? movie.overview.substr(0, 117) + "..." : movie.overview}
									</Typography>

									<br />
									<Typography variant="body2" color="text.secondary">
										Release Date: {movie.release_date}
									</Typography>

								</CardContent>

								<CardActions>

									<PopupState variant="popover" popupId="demo-popup-popover">
										{(popupState) => (
											<div>
												<Button
													color="primary"
													size="small"
													endIcon={<ShareIcon />}
													{...bindTrigger(popupState)}>
													Share
												</Button>
												<Popover
													{...bindPopover(popupState)}

													anchorOrigin={{
														vertical: 'center',
														horizontal: 'right',
													}}
													transformOrigin={{
														vertical: 'center',
														horizontal: 'left',
													}}
												>
													<Typography component={'div'} sx={{ p: 2, width: '100%' }}>
														<Input id="copy" value={url} disabled />

														<Button onClick={ClipBoard} endIcon={<ContentCopyIcon color="primary" />}></Button>
													</Typography>
												</Popover>
											</div>
										)}
									</PopupState>

								</CardActions>
							</Card>

						))}
					</Box>
				</div>
			</Container>
		</React.Fragment>
	);
}



