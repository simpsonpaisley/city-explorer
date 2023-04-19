function Results({ userLat, userLong, userResults }) {
	return (
		<div className="results">
			<h2>{userResults}</h2>
			<h3>Latitude: {userLat} </h3>
			<h3>Longitude: {userLong} </h3>
		</div>
	);
}

export default Results;
