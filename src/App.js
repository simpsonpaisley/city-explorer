import { useState } from 'react';
import './App.css';
import Axios from 'axios';
import Header from './components/Header';
import Form from './components/Form';
import Results from './components/Results';
import Forecast from './components/Forecast';
import Footer from './components/Footer';
function App() {
	const [userSearch, setUserSearch] = useState('');
	const [userResults, setUserResults] = useState('');
	const [userLat, setUserLat] = useState('');
	const [userLon, setUserLon] = useState('');
	const [userMap, setUserMap] = useState('');
	const [userForecastData, setUserForecastData] = useState([]);
	function userSearchHandler(event) {
		setUserSearch(event.target.value);
	}

	async function userResultsHandler() {
		const API =
			'https://eu1.locationiq.com/v1/search?key=' +
			process.env.REACT_APP_APIKEY +
			'&q=' +
			userSearch +
			'&format=json';

		const results = await Axios.get(API);
		//console.log(results);
		setUserResults(results.data[0].display_name);

		setUserLat(results.data[0].lat);

		setUserLon(results.data[0].lon);

		const map =
			'https://maps.locationiq.com/v3/staticmap?key=' +
			process.env.REACT_APP_APIKEY +
			'&center=' +
			results.data[0].lat +
			',' +
			results.data[0].lon +
			'&zoom=15&size=400x400&markers=icon:large-red-cutout|' +
			results.data[0].lat +
			',' +
			results.data[0].lon;

		const userMapResults = await Axios.get(map);

		setUserMap(userMapResults.request.responseURL);

		const forecastAPI =
			'http://localhost:7878/weather?searchQuery=' +
			userSearch +
			'&format=json';

		const forecastResults = await Axios.get(forecastAPI);
		//console.log(forecastResults);
		// const forecastArray = [];
		// forecastArray.push(
		// 	forecastResults.data[0],
		// 	forecastResults.data[1],
		// 	forecastResults.data[2]
		// );
		setUserForecastData(forecastResults.data);
		console.log(userForecastData);
	}

	return (
		<div>
			<Header />
			<div className="mainBackground">
				<Form
					userSearchHandler={userSearchHandler}
					userResultsHandler={userResultsHandler}
				/>
				<Results
					userLat={userLat}
					userLon={userLon}
					userResults={userResults}
					userMap={userMap}
				/>
				<Forecast userForecastData={userForecastData} />
			</div>
			<Footer />
		</div>
	);
}

export default App;
