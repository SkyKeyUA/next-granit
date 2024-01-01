import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';

export type UserDocument = HydratedDocument<User>;

@Schema()
export class User {
  @Prop({ unique: true })
  email: string;

  @Prop()
  password: string;

  @Prop({ defaultValue: 'USER' })
  role: string;

  @Prop({ defaultValue: false })
  banned: boolean;

  @Prop({ allowNull: true })
  banReason: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
