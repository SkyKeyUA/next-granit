import { IsEmail, IsString, Length } from 'class-validator';

class CreateUserDto {
  @IsString({ message: 'Value should be a string' })
  @IsEmail({}, { message: 'Incorrect email' })
  readonly email: string;

  @IsString({ message: 'Value should be a string' })
  @Length(4, 16, { message: 'Must be more than 4 and less than 16 characters' })
  readonly password: string;
}

export { CreateUserDto };
