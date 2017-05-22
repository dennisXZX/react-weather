import React, { Component } from 'react';
import WeatherForm from './WeatherForm';
import WeatherMessage from './WeatherMessage';
import ErrorModal from './ErrorModal';
import openWeatherMap from '../api/openWeatherMap';

class Weather extends Component {
	state = {
		isLoading: false
	}

	searchWeather = (location) => {
		// indicates the data is loading
		this.setState({
			isLoading: true,
			errorMessage: undefined
	});

		// get the weather data through oponweather API
		openWeatherMap
			.getTemp(location)
			.then((temp) => {
				this.setState({
					location: location,
					temp: temp,
					isLoading: false
				});
			})
			.catch((errorMessage) => {
				this.setState({
					isLoading: false,
					errorMessage: errorMessage.message
				})
			})
	}

	render() {
		const { isLoading, location, temp, errorMessage } = this.state;
		
		const renderMessage = () => {
			if (isLoading) {
				return <h3 className="text-center">Fetching weather...</h3>;
			} else if (temp && location) {
				return <WeatherMessage location={location} temp={temp} />;
			}
		}

		// check if there is an error from Open Weather API
		const renderError = () => {
			const { errorMessage } = this.state;

			if (typeof errorMessage === 'string') {
				return (
					<ErrorModal errorMessage={errorMessage} />
				)
			}
		}

		return (
			<div>
				<h1 className="text-center">Get Weather</h1>
				<WeatherForm searchWeather={this.searchWeather} />
				{renderMessage()}
				{renderError()}
			</div>
		)
	}
}

export default Weather;