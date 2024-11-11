import { BelongsToMany, Column, DataType, Model, Table } from "sequelize-typescript";
import { ApiProperty } from "@nestjs/swagger";
import { Role } from "../roles/roles.model";
import { UserRoles } from "../roles/user-roles.model";

interface UserCreationAttributes {
  email: string;
  password: string;
}

@Table({tableName: "users"})
export class User extends Model<User, UserCreationAttributes> {

  @ApiProperty({example: '1', description: 'unique identifier'})
  @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
  id: number;

  @ApiProperty({example: 'user@mail.ru', description: 'user email'})
  @Column({type: DataType.STRING, unique: true, allowNull: false})
  email: string;

  @ApiProperty({example: '123qwerty', description: 'user password'})
  @Column({type: DataType.STRING, allowNull: false})
  password: string;

  @ApiProperty({example: 'true/false', description: 'banned user or not'})
  @Column({type: DataType.STRING, defaultValue: false})
  banned: boolean;

  @ApiProperty({example: 'for hooliganism', description: 'reason for blocking'})
  @Column({type: DataType.STRING, allowNull: true})
  banReason: string;

  @BelongsToMany(() => Role, () => UserRoles)
  roles: Role[];
}