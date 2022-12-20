import "../App.css";

const MovieCardComponent = ({ movieName }) => {
	return (
		<div className="movie-card">
			<div className="movie-name">
				<p style={{ color: "white" }}>{movieName}</p>
			</div>
		</div>
	);
};

export default MovieCardComponent;
