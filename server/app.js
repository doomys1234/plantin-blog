import express from 'express';
import cors from 'cors';


import * as AppRouter from './routes/AppRouter.js'
const app = express()
app.use(cors());
AppRouter.createRouter(app);

export default app;
