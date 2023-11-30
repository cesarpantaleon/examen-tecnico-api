import express, {Express} from 'express';
import morgan from 'morgan';
import cors from 'cors';

import {connectDB} from './database';
import {PORT} from './config';
import {routes} from './routes';

export class Server{

    private app:Express;
    constructor(){
        this.app=express();
        connectDB();
        this.configuration();
        this.middleware();
        this.routes();
    }

    configuration(){
        this.app.set("port",PORT || 3000);
    }

    middleware(){
        this.app.use(morgan("dev"));
        this.app.use(cors());
        this.app.use(express.json());
    }

    routes(){
        this.app.get('/', (req, res) => {
            res.status(200).send('Hello, TypeScript Express!');
        });

        this.app.use('/api/persona-juridica',routes.PersonaRoute);
        this.app.use('/api/user', routes.UserRoute);
    }

    listen(){
        this.app.listen(this.app.get("port"), () => {
            console.log(`Server running at http://localhost:${this.app.get("port")}`);
          });
    }
}