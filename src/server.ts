import 'reflect-metadata';
import express from 'express';
import './database'
import { router } from './routes';

const app = express();

// http://localhost:3333/...

app.use(express.json());
app.use(router);

app.listen(3333, () => console.log("Server is running!"));