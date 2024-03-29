import express,{Express} from 'express';
import {AppServer} from "./setupServer";
import mangodbConnection from './setupDatabase';
import {config} from "./config";

class Application{
    public initialize() :void{
        this.loadConfig();
        mangodbConnection();
        const app:Express = express();
        const server:AppServer = new AppServer(app);
        server.start();
    }

    private loadConfig():void{
        config.validateConfig();
    }
}
const application :Application = new Application();
application.initialize();