
import { DB_CONFIG } from "@/core/config/db";
import { DataSource } from "typeorm";
import "reflect-metadata"

export const AppDataSource = new DataSource({
  type: DB_CONFIG.type,
  host: DB_CONFIG.host,
  port: DB_CONFIG.port,
  username: DB_CONFIG.username,
  password: DB_CONFIG.password,
  database: DB_CONFIG.database,
  synchronize: true,
  logging: false,
  entities: [],
  migrations: [],
  subscribers: [],
});