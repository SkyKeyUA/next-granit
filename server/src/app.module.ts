import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { UsersModule } from './users/users.module';
import { FileModule } from './file/file.module';
import { AuthModule } from './auth/auth.module';
import { RolesModule } from './roles/roles.module';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from './users/model/user.model';
import { Role } from './roles/model/roles.model';
import { UserRoles } from './roles/model/user-roles.model';
import { Product } from '@product/model/product.model';
import { ProductModule } from '@product/product.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import * as path from 'path';


@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: '.env' }),
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: Number(process.env.POSTGRES_PORT),
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DB,
      models: [User, Role, UserRoles, Product],
      autoLoadModels: true,
    }),
    ServeStaticModule.forRoot({
      rootPath: path.resolve(__dirname, '../src/static/images'),
    }),
    UsersModule,
    FileModule,
    AuthModule,
    RolesModule,
    ProductModule,
  ],
})
export class AppModule {}
