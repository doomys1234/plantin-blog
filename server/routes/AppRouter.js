
import WeatherRouter from "./weather/WeatherRouter.js";
import BlogRouter from "./blog/BlogRouter.js";

export const baseUrls = {
    weather: `/weather`,
    blog: `/blog`,
};

export function createRouter(app) {
    new WeatherRouter(app, baseUrls.weather).create();
    new BlogRouter(app, baseUrls.blog).create();
}
