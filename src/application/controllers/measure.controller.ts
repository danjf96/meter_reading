import { Request, Response } from "express";
import { injectable, inject } from "tsyringe";
import { MeasureUseCases } from "../domain/useCases/measureUseCase";

@injectable()
export class MeasureController {
  constructor(
    @inject(MeasureUseCases) private measureUseCases: MeasureUseCases
  ) {}

  public async create(req: Request, res: Response): Promise<void> {
    try {
      const result = await this.measureUseCases.createMeasure({
        customer_code: 'req.body.customer_code',
        measure_datetime: new Date(),
        measure_type: "WATER",
        image: 'req.body.image',
        value: 1,
      });

      res.status(201).json(result);
    } catch (error) {
      console.log('error', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
}
