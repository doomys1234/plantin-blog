

import BaseRouter from "../base/BaseRouter.js";
import BlogController from "../../controllers/blog/BlogController.js";
export default class BlogRouter extends BaseRouter {

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
        return new BlogController();
    }

    async _get(req, res, next) {
        try {
            const blogResponse = await this._controller().getBlogData();
            if (!blogResponse.success) {
                throw new Error(502, { message: "Can't get the blog data" });
            }
            res.status(200).json(blogResponse);
        } catch (error) {
            next(error);
        }
    }
}
