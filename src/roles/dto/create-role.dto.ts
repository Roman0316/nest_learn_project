import { ApiProperty } from "@nestjs/swagger";

export class CreateRoleDto {
  @ApiProperty({example: 'ANMIN', description: 'user role'})
  readonly value: string;
  @ApiProperty({example: 'Administrator', description: 'Administrator'})
  readonly description: string;
}