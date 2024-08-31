import { MeasureModel } from '../../model/measure.model';
import { injectable, inject } from "tsyringe";
import { MeasureRepository } from '../ports/respository/measure.repository.interface';

interface MeasureCreateResponse {
    image_url: string, 
    measure_value: string,
    measure_uuid: string
}

@injectable()
export class MeasureUseCases {
  constructor(
    @inject("MeasureRepository") private measureRepository: MeasureRepository
  ) {}

  async createMeasure(measure: MeasureModel): Promise<MeasureCreateResponse> {
    const response = await this.measureRepository.add(measure);
    console.log('AQUI RESPONSE CREATE',response)
    return {  image_url: 'string', measure_value: 'number', measure_uuid: 'string' }
  }
}