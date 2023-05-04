import ForecastDay from './ForecastDay';

function Forecast({ userForecastData }) {
	return (
		<div className="results">
			<h2>Weather Forecast</h2>
			<div className="forecastDisplay"></div>
		</div>
	);
}

export default Forecast;
