import WeatherService from "../services/weather-service.js";

let _weatherService = new WeatherService()

//NOTE The weather service and controller are mostly done, 
//		you may wish to check out the model and include some additional data.


7

//TODO Complete rendering data to the screen
function drawWeather() {
	console.log("THE WEATHER MAN SAYS:", _weatherService.Weather)
}

function convertKelvinToFarenheit(kelvin) {
	if (kelvin < (0)) {
		return 'below absolute zero (0 K)';
	} else {
		return ((kelvin - 273.15) * 1.8) + 32
	}
}
export default class WeatherController {

	constructor() {
		_weatherService.addSubscriber('weather', drawWeather)
		_weatherService.getWeather()
	}

}
