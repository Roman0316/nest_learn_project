import { ApiProperty } from "@nestjs/swagger";

export class CreateUserDto {
  @ApiProperty({example: 'user@mai.ru', description: 'user email'})
  readonly email: string;
  @ApiProperty({example: 'qwerty123', description: 'user password'})
  readonly password: string;
}