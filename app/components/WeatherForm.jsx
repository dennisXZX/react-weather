import React, { Component } from 'react';

class WeatherForm extends Component {
	onFormSubmit = (e) => {
		e.preventDefault();
		const location = this.refs.location.value;

		if (location.length > 0) {
			this.refs.location.value = "";
			this.props.searchWeather(location);
		}
	}

	render() {
		return (
			<div>
				<form onSubmit={this.onFormSubmit}>
					<input ref="location" type="search" placeholder="Enter a city" />
					<button className="button expanded">Get Weather</button>
				</form>
			</div>
		)
	}
}

export default WeatherForm;