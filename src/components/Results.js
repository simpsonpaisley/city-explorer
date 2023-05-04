function Results({ userLat, userLon, userResults, userMap }) {
	return (
		<div className="results">
			<h2>{userResults}</h2>
			<h3>Latitude: {userLat} </h3>
			<h3>Longitude: {userLon} </h3>
			<br />
			<br />
			<img
				src={userMap}
				alt="map"
				className="map"></img>
		</div>
	);
}

export default Results;
