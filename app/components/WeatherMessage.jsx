import React, { Component } from 'react';

class WeatherMessage extends Component {
	render() {
		const { location, temp } = this.props;		

		return (
			<h1 className="text-center">It's is {temp} in {location}</h1>
		)
	}
}

export default WeatherMessage;