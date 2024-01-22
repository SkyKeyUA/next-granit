import { IsNumber, IsString } from 'class-validator';

class BanUserDto {
  @IsNumber({}, { message: 'Value should be a number' })
  readonly userId: number;
  @IsString({ message: 'Value should be a string' })
  readonly banReason: string;
}

export { BanUserDto };
