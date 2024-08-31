export class MeasureModel {
    uuid?: string;
    customer_code?: string;  
    measure_datetime: Date;  
    measure_type: string;  
    image: string;  
    value: number;  
    has_confirmed?: boolean;  
    date_create?: Date;
    date_update?: Date;
}