import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { User } from 'src/users/schemas/user.schemas';

export type RoleDocument = HydratedDocument<Role>;

@Schema()
export class Role {
  @Prop({ unique: true })
  value: string;

  @Prop()
  description: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'UserRole' })
  users: User[];
}

export const RoleSchema = SchemaFactory.createForClass(Role);
