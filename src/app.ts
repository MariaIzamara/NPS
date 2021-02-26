import 'reflect-metadata';
import express from 'express';
import createConnection from './database'
import { router } from './routes';

createConnection();
const app = express();

// http://localhost:3333/...

app.use(express.json());
app.use(router);

export { app };