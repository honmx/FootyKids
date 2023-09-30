import { Column, DataType, Table, Model } from "sequelize-typescript";

@Table({ tableName: "roles" })
export class Role extends Model<Role> {
  @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
  id: number
  
  @Column({ type: DataType.TEXT, unique: true })
  value: string
}