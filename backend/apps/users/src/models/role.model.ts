import { Column, DataType, Table, Model, HasMany } from "sequelize-typescript";
import { User } from "./user.model";

@Table({ tableName: "roles" })
export class Role extends Model<Role> {
  @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
  id: number;
  
  @Column({ type: DataType.TEXT, unique: true, allowNull: false })
  value: string;

  @HasMany(() => User)
  users: User[];
}