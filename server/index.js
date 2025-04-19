import * as http from 'node:http';
import app from './app.js';

const API_PORT = 3000;

(async function main() {
    try {
            const server = http.createServer({ maxHeaderSize: 1024 * 32 }, app);
            server.listen(API_PORT, () => {
                console.info(`The server is listening to port ${API_PORT}.`);
            });

    } catch (error) {
        console.error(error.message);
        process.exit(1);
    }
}());
