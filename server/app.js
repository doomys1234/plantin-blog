import express from 'express';
import * as AppRouter from './routes/AppRouter.js'
const app = express()

AppRouter.createRouter(app);

export default app;
