import express from "express";
import mongoose from "mongoose";
import { router } from "./router/router";

interface AppInterface {
  database(): void;
  routes(): void;
  middlewares(): void;
}

class Application implements AppInterface {
  
  public express: express.Application;

  constructor() {
    this.express = express();
    
    this.middlewares();
    this.database();
    this.routes();
    
  }

  async database(): Promise<void> {
    mongoose.Promise = global.Promise;
    await mongoose
      .connect("mongodb://localhost:27017/secretProjet", {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true,
      })
      .then((): void => console.log("connected successful"))
      .catch((err): void => console.log("Erro, " + err));
  }

  routes(): void {
    this.express.use(router);
  }

  middlewares(): void {
    this.express.use(express.json());
  }
}

export default new Application().express;
