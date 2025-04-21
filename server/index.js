// import * as http from 'node:http';
import app from './app.js';

app.use("/", (req,res)=>{
    res.send("hello world server");
})

app.listen(3000, console.log('Server is running on PORT 5000'))
// const API_PORT = 3000;

// (async function main() {
//     try {
//             const server = http.createServer({ maxHeaderSize: 1024 * 32 }, app);
//             server.listen(API_PORT, () => {
//                 console.log(`The server is listening to port ${API_PORT}.`);
//             });
//
//     } catch (error) {
//         console.error(error.message);
//         process.exit(1);
//     }
// }());
