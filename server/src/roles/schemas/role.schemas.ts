import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';
import { UserRole } from './user-role.schemas';

export type RoleDocument = HydratedDocument<Role>;

@Schema()
export class Role {
  @Prop({ unique: true, allowNull: false })
  value: string;

  @Prop({ allowNull: false })
  description: string;

  @Prop({ type: [{ type: Types.ObjectId, ref: 'UserRole' }] })
  userRoles: UserRole[];
}

export const RoleSchema = SchemaFactory.createForClass(Role);
