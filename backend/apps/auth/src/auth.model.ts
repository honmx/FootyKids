import { Column, DataType, Model, Table } from "sequelize-typescript";

interface AuthCreationAttrs {
  userId: number;
  refreshToken: string;
}

@Table({ tableName: "auth" })
export class Auth extends Model<Auth, AuthCreationAttrs> {
  @Column({ type: DataType.INTEGER, unique: true })
  userId: number;

  @Column({ type: DataType.TEXT })
  refreshToken: string;
}