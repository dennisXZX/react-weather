import React, { Component } from 'react';

class About extends Component {
	render() {
		return (
			<div>
				<h1 className="text-center">About</h1>
				<p>This app is build on React, React-router Express, Foundation, Axios and Webpack.</p>
				<ol>
					<li>
						<a href='https://facebook.github.io/react' target="_blank">React</a>
					</li>
					<li>
						<a href='http://openweathermap.org' target="_blank">Open Weather Map</a>
					</li>
					<li>
						<a href='http://foundation.zurb.com/' target="_blank">Foundation</a>
					</li>
				</ol>				
			</div>
		)
	}
}

export default About;