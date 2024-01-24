import { Module, forwardRef } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { RolesModule } from 'src/roles/roles.module';
import { AuthModule } from 'src/auth/auth.module';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from './model/user.model';
import { Role } from 'src/roles/model/roles.model';
import { UserRoles } from '@roles/model/user-roles.model';
import { Product } from '@product/model/product.model';

@Module({
  imports: [
    SequelizeModule.forFeature([User, Role, UserRoles, Product]),
    RolesModule,
    forwardRef(() => AuthModule),
  ],
  controllers: [UsersController],
  providers: [UsersService],
  exports: [UsersService],
})
export class UsersModule {}
