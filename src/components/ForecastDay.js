function ForecastDay({ day }) {
	return (
		<div className="ForecastDayDisplay">
			<h3>{day.date}</h3>
			<p>{day.description}</p>
		</div>
	);
}

export default ForecastDay;
