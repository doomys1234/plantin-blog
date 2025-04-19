
import WeatherRouter from "./weather/WeatherRouter.js";
const baseUrl = '/api';
export const baseUrls = {
    weather: `${baseUrl}/weather`,
};

/**
 * Mounts all v2 routers.
 *
 * @param {object} app - The express server app.
 */
export function createRouter(app) {
    new WeatherRouter(app, baseUrls.weather).create();

}
