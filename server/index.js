import * as http from 'node:http';
// import app from './app.js';
import express from "express";
import * as AppRouter from "./routes/AppRouter.js";

const app = express()

const API_PORT = process.env.PORT || 3000;
AppRouter.createRouter(app);

// app.listen(API_PORT, console.log(`Server is running on PORT ${API_PORT}`))
(async function main() {
    try {
            const server = http.createServer({ maxHeaderSize: 1024 * 32 }, app);
            server.listen(API_PORT, () => {
                console.log(`The server is listening to port ${API_PORT}.`);
            });

    } catch (error) {
        console.error(error.message);
        process.exit(1);
    }
}());
