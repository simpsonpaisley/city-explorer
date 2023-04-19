function Results({ userLat, userLong, userResults, userMap }) {
	return (
		<div className="results">
			<h2>{userResults}</h2>
			<h3>Latitude: {userLat} </h3>
			<h3>Longitude: {userLong} </h3>
			<br />
			<br />
			<img
				src={userMap}
				alt="map"></img>
		</div>
	);
}

export default Results;
