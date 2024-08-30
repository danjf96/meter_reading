const DB_TYPE:
  | "postgres" = "postgres";

export const DB_CONFIG = {
  type: DB_TYPE,
  host: "db",
  port: 5432,
  username: "user",
  password: "123",
  database: "meter_reading",
};