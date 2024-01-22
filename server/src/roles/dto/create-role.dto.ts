import { IsString } from 'class-validator';

class CreateRoleDto {
  @IsString({ message: 'Value should be a string' })
  readonly value: string;
  @IsString({ message: 'Value should be a string' })
  readonly description: string;
}

export { CreateRoleDto };
