export default class WeatherControllerHelper {
    constructor() {
        this.API_KEY= "e72042513b2fb9995505addef5aac37e";
    }

    geoUrl() {
        return `https://api.openweathermap.org/geo/1.0/direct?q=Kyiv&limit=5&appid=${this.API_KEY}`;
}
    weatherUrl(lat,lon) {
        return `https://api.openweathermap.org/data/2.5/weather?units=metric&lat=${lat}&lon=${lon}&appid=${this.API_KEY}`;
    }
}
