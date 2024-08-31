import { container } from "tsyringe";
import { DataSource } from "typeorm";
import { AppDataSource } from "@/infra/orm.config";
import { MeasureRepository } from "@/application/domain/ports/respository/measure.repository.interface";
import { MeasureRepositoryImpl } from "../repository/measure.repository.impl";

// Registre o DataSource
container.register<DataSource>(DataSource, { useValue: AppDataSource });

// Registre o MeasureRepository
container.register<MeasureRepository>("MeasureRepository", {
  useClass: MeasureRepositoryImpl,
});
