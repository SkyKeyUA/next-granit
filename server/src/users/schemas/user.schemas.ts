import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';
import { BanUser } from './banUser.schemas';
import { Role } from 'src/roles/schemas/role.schemas';

export type UserDocument = HydratedDocument<User>;

@Schema()
export class User {
  @Prop({ unique: true })
  email: string;

  @Prop()
  password: string;

  @Prop({ type: Types.ObjectId, ref: 'BanUser' })
  banUser: BanUser;

  @Prop({ type: [{ type: Types.ObjectId, ref: 'Role' }] })
  roles: Role[];

  _id: Types.ObjectId;
}

export const UserSchema = SchemaFactory.createForClass(User);
