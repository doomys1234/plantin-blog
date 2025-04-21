import * as http from 'node:http';
import app from './app.js';
const API_PORT = process.env.PORT || 3000;

// app.listen(port, console.log(`Server is running on PORT ${port}`))
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
