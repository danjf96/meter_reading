import { FrameworkConfig } from "./core/config/framework";
import { AppDataSource } from "./infra/orm.config";

const express = require('express');
const dotenv = require('dotenv');

const app = async () => {
  const typeORM = await AppDataSource.initialize();
  const app = express();
  const framework = new FrameworkConfig(app);
  if (typeORM.isInitialized) {
    await framework.init();
  }
};

dotenv.config()
app();