import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { BanUser } from './banUser.schemas';
import { Role } from 'src/roles/schemas/role.schemas';

export type UserDocument = HydratedDocument<User>;

@Schema()
export class User {
  @Prop({ unique: true })
  email: string;

  @Prop()
  password: string;

  @Prop({ defaultValue: 'USER' })
  role: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'BanUser' })
  banUser: BanUser;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'UserRole' })
  roles: Role[];
}

export const UserSchema = SchemaFactory.createForClass(User);
