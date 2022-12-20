import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import MovieCardComponent from "./components/movieCardComponent";

function App() {
	const [moviesArray, setMoviesArray] = useState([]);
	const [seriesArray, setSeriesArray] = useState([]);
	const [setStates, updateSetStates] = useState({});
	// useEffect(() => {
	// 	fetchMovies();
	// }, []);
	let pageIndex = 1;
	const fetchMovies = (movieName) => {
		var config = {
			method: "get",
			url: `https://www.omdbapi.com/?apikey=741731e7&s=${movieName}`,
			headers: {},
		};

		axios(config)
			.then(function (response) {
				console.log("response here", response.data.Search);
				// while (response.data.Search.length > 0) {
				// 	pageIndex++;
				// 	console.log(pageIndex);
				// 	fetchMovies();
				// }
				if (response.data.Search !== undefined) {
					// setMoviesArray(response.data.Search);
					console.log("not undefined");
					filterData(response.data.Search);
				}
				// updateSetStates({});
			})
			.catch(function (error) {
				console.log(error);
			});
	};
	const handleSearch = (e) => {
		fetchMovies(e.target.value);
	};
	const filterData = (movieList) => {
		const series = movieList.filter((c) => c.Type === "series");
		setSeriesArray(series);
		const movies = movieList.filter((c) => c.Type === "movie");
		setMoviesArray(movies);
	};
	return (
		<div>
			<div className="headerComponent">
				<div>
					<p>MyTestApp</p>
				</div>
			</div>
			<div className="hero">
				<h1>Watch something incredible.</h1>
			</div>
			<div className="searchSection">
				<p>Search</p>
				<input type={"text"} onChange={handleSearch} />
			</div>
			<div className="movieSection">
				<p>Movies</p>
				<div className="carousel">
					{moviesArray.length < 1
						? "Movies get returned here"
						: moviesArray.map((c, i) => (
								<MovieCardComponent key={i} movieName={c.Title} />
						  ))}
				</div>
			</div>

			{/*  */}
			<div className="movieSection">
				<p className="">Series</p>
				{/* <div className="carousel">
					<MovieCardComponent movieName={"movie name"} />
				</div> */}
				<div className="carousel">
					{seriesArray.length < 1
						? "Series gets returned here"
						: seriesArray.map((c, i) => (
								<MovieCardComponent key={i} movieName={c.Title} />
						  ))}
				</div>
			</div>
		</div>
	);
}

export default App;
