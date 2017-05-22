import axios from 'axios';

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=dbd636d359406b7c46a6ed075dff431e&units=metric';

export default {
	getTemp: function (location) {
		const encodedLocation = encodeURIComponent(location);
		const requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

		return axios.get(requestUrl)
			.then((res) => {
				return res.data.main.temp;
			})
			.catch((err) => {
				throw new Error(err.response.data.message);
			});
	}
}