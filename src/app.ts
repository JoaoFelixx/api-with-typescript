import express from "express";
import { router } from "./router/router";

class Application {
  
  public express: express.Application;

  constructor() {
    this.express = express();
    
    this.middlewares();
    this.routes();
  }

  routes(): void {
    this.express.use(router);
  }

  middlewares(): void {
    this.express.use(express.json());
  }
}

export default new Application().express;