import express, {Request, Response} from 'express';
import { configDotenv } from 'dotenv';
import bodyParser from 'body-parser';
import cors from 'cors'
import {errorHandler} from './handler'
import router from './router/router';

configDotenv({path: '.env-dev'});

const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use(express.urlencoded({extended: true}));



app.get('/', (req:Request, res: Response) => {
    res.send('Hello world');
})

app.use('/api', router);

app.use(errorHandler);

app.listen(port, () => {
    console.log("http://localhost:3000");
})