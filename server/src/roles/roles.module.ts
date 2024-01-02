import { Module } from '@nestjs/common';
import { RolesService } from './roles.service';
import { RolesController } from './roles.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Role, RoleSchema } from './schemas/role.schemas';
import { User, UserSchema } from 'src/users/schemas/user.schemas';
import { UserRole, UserRoleSchema } from './schemas/user-role.schemas';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Role.name, schema: RoleSchema }]),
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
    MongooseModule.forFeature([
      { name: UserRole.name, schema: UserRoleSchema },
    ]),
  ],
  providers: [RolesService],
  controllers: [RolesController],
})
export class RolesModule {}
