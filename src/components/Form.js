function Form({ userSearchHandler, userResultsHandler }) {
	return (
		<div className="form">
			<label htmlFor="location">Search for a Location</label>

			<input
				placeholder="Search for a Location"
				name="location"
				id="location"
				onChange={userSearchHandler}></input>
			<button
				type="submit"
				onClick={userResultsHandler}>
				Explore!
			</button>
		</div>
	);
}

export default Form;
