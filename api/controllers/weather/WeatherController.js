import axios from "axios";
import WeatherControllerHelper from "./WeatherControllerHelper.js";

export default class WeatherController {
    constructor() {
        this.helper = new WeatherControllerHelper();
    }

    async getCurrentGeolocation() {
        try{
          const response = await axios.get(this.helper.geoUrl())
            if(response.status === 200 && response.statusText === 'OK') {
                return {success: true, data: response.data[1]};
            }
        }catch (error) {
            console.error(error);
        }
    }

    async getCurrentWeather() {
        try {
            const {data:{lat, lon}}= await this.getCurrentGeolocation();
            const response = await axios.get(this.helper.weatherUrl(lat,lon))
            if(response.status === 200 && response.statusText === 'OK') {
                return {success: true, data: response.data};
            }
        }catch(error){
            console.error(error);
        }
    }


}
