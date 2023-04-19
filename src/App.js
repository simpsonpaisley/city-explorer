import { useState } from 'react';
import './App.css';
import Axios from 'axios';
import Header from './components/Header';
import Form from './components/Form';
import Results from './components/Results';
function App() {
	const [userSearch, setUserSearch] = useState('');
	const [userResults, setUserResults] = useState('');
	const [userLat, setUserLat] = useState('');
	const [userLong, setUserLong] = useState('');

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
		console.log(results);
		setUserResults(results.data[0].display_name);
		console.log(userResults);
		setUserLat(results.data[0].lat);
		setUserLong(results.data[0].lon);
	}

	return (
		<div>
			<Header />
			<Form
				userSearchHandler={userSearchHandler}
				userResultsHandler={userResultsHandler}
			/>
			<Results
				userLat={userLat}
				userLong={userLong}
				userResults={userResults}
			/>
		</div>
	);
}

export default App;
