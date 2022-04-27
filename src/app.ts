import 'dotenv/config';
import express from "express";
import cors from 'cors';
import { routes } from "./routes";

class Application {

  public express: express.Application;

  constructor() {
    this.express = express();

    this.middlewares();
    this.routes();
  }

  routes(): void {
    this.express.use('/api/v1',routes);
  }

  middlewares(): void {
    this.express.use(express.json());
    this.express.use(cors());
  }
}

const { express: application } = new Application()

export { application };