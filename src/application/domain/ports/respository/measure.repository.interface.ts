import { MeasureModel } from "@/application/model/measure.model";

export interface MeasureRepository {
    add(todo: MeasureModel): Promise<void>;
    findAll(): Promise<MeasureModel[]>;
    updateContent(uuid: string): Promise<void>;
 }