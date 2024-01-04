import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { UserRole } from './user-role.schemas';

export type RoleDocument = HydratedDocument<Role>;

@Schema()
export class Role {
  @Prop({ unique: true, allowNull: false })
  value: string;

  @Prop({ allowNull: false })
  description: string;

  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'UserRole' }] })
  userRoles: UserRole[];
}

export const RoleSchema = SchemaFactory.createForClass(Role);
