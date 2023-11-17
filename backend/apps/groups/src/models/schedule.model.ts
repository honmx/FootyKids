import { BelongsTo, Column, DataType, ForeignKey, HasMany, Model, Table } from "sequelize-typescript";
import { User } from "apps/users/src/models/user.model";
import { TrainingByDay } from "./trainingByDay.model";
import { TrainingByDayOfTheWeek } from "./trainingByDayOfTheWeek.model";

interface ScheduleCreationAttrs {
  date: string;
  participantsId?: number[];
}

@Table({ tableName: "schedule" })
export class Schedule extends Model<Schedule, ScheduleCreationAttrs> {
  @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
  id: number;

  @Column({ type: DataType.TEXT })
  date: string;

  @ForeignKey(() => TrainingByDay)
  @Column({ type: DataType.INTEGER, allowNull: true })
  trainingByDayId: number;

  @HasMany(() => TrainingByDay)
  trainingsByDay: TrainingByDay[];

  @ForeignKey(() => TrainingByDayOfTheWeek)
  @Column({ type: DataType.INTEGER, allowNull: true })
  trainingByDayOfTheWeekId: number;

  @HasMany(() => TrainingByDayOfTheWeek)
  trainingsByDayOfTheWeek: TrainingByDayOfTheWeek[];

  @ForeignKey(() => User)
  @Column({ type: DataType.INTEGER, allowNull: true })
  userId: number;
}