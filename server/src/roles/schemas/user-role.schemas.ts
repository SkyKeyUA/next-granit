import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';

export type UserRoleDocument = HydratedDocument<UserRole>;

@Schema()
export class UserRole {
  @Prop()
  roleId: number;

  @Prop()
  userId: number;
}

export const UserRoleSchema = SchemaFactory.createForClass(UserRole);
