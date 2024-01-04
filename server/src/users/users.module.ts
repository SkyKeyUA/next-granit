import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { User, UserSchema } from './schemas/user.schemas';
import { BanUser, BanUserSchema } from './schemas/banUser.schemas';
import { MongooseModule } from '@nestjs/mongoose';
import { Role, RoleSchema } from 'src/roles/schemas/role.schemas';
import { UserRole, UserRoleSchema } from 'src/roles/schemas/user-role.schemas';
import { RolesModule } from 'src/roles/roles.module';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
    MongooseModule.forFeature([{ name: BanUser.name, schema: BanUserSchema }]),
    MongooseModule.forFeature([{ name: Role.name, schema: RoleSchema }]),
    MongooseModule.forFeature([
      { name: UserRole.name, schema: UserRoleSchema },
    ]),
    RolesModule,
  ],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
