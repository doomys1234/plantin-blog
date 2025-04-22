import { Router } from 'express';
const GET = 'GET';

export default class BaseRouter {
    constructor(app, basePath) {
        this._router = new Router();
        this._path = basePath;
        this._app = app;
        const routes = this.getRoutes();

        routes.forEach(route => {
            const { path, middlewares = [], function: handler } = route;

            switch (route.method) {
                case GET:
                    this._router.get(path, ...middlewares, handler);
                    break;
                default:
                    throw new Error(`HTTP method not defined: ${route.method}`);
            }
        });
    }

    create() {
        this._app.use(this._path, this._router);
    }

    getRoutes() {
        throw Error('Child class should have a list of routes')
    }

}

export {
    GET,
};
