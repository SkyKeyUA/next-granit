import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { User } from './user.schemas';

export type BanUserDocument = HydratedDocument<BanUser>;

@Schema()
export class BanUser {
  @Prop({ defaultValue: false })
  banned: boolean;

  @Prop({ allowNull: true })
  banReason: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
  user: User;
}

export const BanUserSchema = SchemaFactory.createForClass(BanUser);
