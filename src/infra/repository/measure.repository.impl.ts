import { Repository, DataSource } from 'typeorm';
import { Measure } from '../entity/measure.entity';
import { MeasureRepository } from '../../application/domain/ports/respository/measure.repository.interface';
import { MeasureModel } from '@/application/model/measure.model';
import { injectable } from "tsyringe";

@injectable()
export class MeasureRepositoryImpl implements MeasureRepository {
  private measureRepository: Repository<Measure>;

  constructor(private dataSource: DataSource) {
    this.measureRepository = this.dataSource.getRepository(Measure);
  }

  async add(measure: MeasureModel): Promise<void> {
    await this.measureRepository.save(measure);
  }

  async updateContent(uuid: string): Promise<void> {
    await this.measureRepository.save({ uuid, has_confirmed: true });
  }

  async findAll(): Promise<MeasureModel[]> {
    return this.measureRepository.find();
  }
}
