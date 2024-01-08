import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';

export type UserRoleDocument = HydratedDocument<UserRole>;

@Schema()
export class UserRole {
  @Prop({ type: Types.ObjectId, ref: 'Role' })
  roleId: Types.ObjectId;

  @Prop({ type: Types.ObjectId, ref: 'User' })
  userId: Types.ObjectId;

  _id: Types.ObjectId;
}

export const UserRoleSchema = SchemaFactory.createForClass(UserRole);
