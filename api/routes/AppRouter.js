
import WeatherRouter from "./weather/WeatherRouter.js";
import BlogRouter from "./blog/BlogRouter.js";
const baseUrl = '/api';
export const baseUrls = {
    weather: `${baseUrl}/weather`,
    blog: `${baseUrl}/blog`,
};

export function createRouter(app) {
    new WeatherRouter(app, baseUrls.weather).create();
    new BlogRouter(app, baseUrls.blog).create();
}
