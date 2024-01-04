import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument, Types } from 'mongoose';

export type UserRoleDocument = HydratedDocument<UserRole>;

@Schema()
export class UserRole {
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Role' })
  roleId: Types.ObjectId;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
  userId: Types.ObjectId;
}

export const UserRoleSchema = SchemaFactory.createForClass(UserRole);
