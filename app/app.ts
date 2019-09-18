import express from "express";
import { Routes } from './routes';
import bodyParser from "body-parser";
import mongoClient from 'mongodb';

let url = 'mongodb://localhost/emp';

class App {
public app: express.Application;
public routePrv: Routes = new Routes();

constructor() {
    this.app = express();
    this.config();
    this.routePrv.routes(this.app);
    this.mongoSetup();
}


private config():void {
    
    this.app.use(function(req,res,next){
        res.header("Access-Control-Allow-Origin","*");
        res.header("Access-Control-Allow-Headers","Origin,X-Requested-With");
        res.header('Access-Control-Allow-Methods','GET,POST,OPTIONS,PUT');
        next();

    })
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended : false}));
}

    private mongoSetup(): void {
        mongoClient.connect(url,{useNewUrlParser: true,useUnifiedTopology: true})
      .then(() => console.log('connected successful'))
      .catch((err) => console.error(err));
    }   

}
export default new App().app;