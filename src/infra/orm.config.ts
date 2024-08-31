
import { DB_CONFIG } from "@/infra/config/db";
import { DataSource } from "typeorm";
import { Measure } from "./entity/measure.entity";

export const AppDataSource = new DataSource({
  type: DB_CONFIG.type,
  host: DB_CONFIG.host,
  port: DB_CONFIG.port,
  username: DB_CONFIG.username,
  password: DB_CONFIG.password,
  database: DB_CONFIG.database,
  synchronize: true,
  logging: false,
  entities: [Measure],
  migrations: [],
  subscribers: [],
});