import { IsNumber, IsString } from 'class-validator';

class AddRoleDto {
  @IsNumber({}, { message: 'Value should be a number' })
  readonly userId: number;
  @IsString({ message: 'Value should be a string' })
  readonly value: string;
}

export { AddRoleDto };
