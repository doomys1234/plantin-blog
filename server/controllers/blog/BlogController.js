import {blogData} from "./blogData.js";

export default class BlogController {
    constructor() {
    }

    async getBlogData() {
        try{
            //here would be the logic of getting data from db
            return {success: true, data: blogData};
        }catch (error) {
            console.error(error);
        }
    }
}
