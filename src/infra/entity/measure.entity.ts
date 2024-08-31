import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity()
export class Measure {
  @PrimaryGeneratedColumn('uuid')
  uuid: string;

  @Column('varchar')
  customer_code: string;

  @Column('timestamp')
  measure_datetime: Date;

  @Column('varchar')
  measure_type: string;

  @Column('varchar')
  image: string;

  @Column('integer')
  value: number;

  @Column('boolean', { default: false })
  has_confirmed: boolean;

  @CreateDateColumn()
  date_create: Date;

  @UpdateDateColumn()
  date_update: Date;
}