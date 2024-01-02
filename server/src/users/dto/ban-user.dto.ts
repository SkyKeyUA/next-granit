import { ObjectId } from 'mongodb';

class BanUserDto {
  readonly banReason: string;
  readonly userId: ObjectId;
}

export { BanUserDto };
