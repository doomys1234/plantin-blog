

import BaseRouter from "../base/BaseRouter.js";
import WeatherController from "../../controllers/weather/WeatherController.js";

export default class WeatherRouter extends BaseRouter {

    getRoutes() {
        return [
            {
                method: 'GET',
                path: '/',
                function: this._get.bind(this),
            },
        ];
    }

    _controller() {
        return new WeatherController();
    }

    async _get(req, res, next) {
        try {
            const weatherResponse = await this._controller().getCurrentWeather();
            if (!weatherResponse.success) {
                throw new Error(502, { message: "Can't get the current weather" });
            }
            res.status(200).json(weatherResponse);
        } catch (error) {
            next(error);
        }
    }
}
