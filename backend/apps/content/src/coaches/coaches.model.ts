import { Column, DataType, Model, Table } from "sequelize-typescript";

interface CoachCreationAttrs {
  photo?: string;
  type: "Тренер" | "Главный тренер" | "Руководитель";
  name: string;
  birth: string;
  education?: string[];
  startedPlaying: number;
  firstCoachName: string;
  currentTeam?: string;
  teams?: string[];
  achievements?: string[];
}

@Table({ tableName: "coaches" })
export class Coach extends Model<Coach, CoachCreationAttrs> {
  @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
  id: number;
  
  @Column({ type: DataType.STRING, allowNull: true, defaultValue: null })
  photo: string;
  
  @Column({ type: DataType.STRING })
  type: "Тренер" | "Главный тренер" | "Руководитель";
  
  @Column({ type: DataType.STRING })
  name: string;
  
  @Column({ type: DataType.STRING })
  birth: string;
  
  @Column({ type: DataType.ARRAY(DataType.STRING), allowNull: true, defaultValue: null })
  education: string[];
  
  @Column({ type: DataType.INTEGER })
  startedPlaying: number;
  
  @Column({ type: DataType.STRING })
  firstCoachName: string;

  @Column({ type: DataType.STRING, allowNull: true, defaultValue: null })
  currentTeam: string;
  
  @Column({ type: DataType.ARRAY(DataType.STRING), allowNull: true, defaultValue: null })
  teams: string[];
  
  @Column({ type: DataType.ARRAY(DataType.STRING), allowNull: true, defaultValue: null })
  achievements: string[];
}