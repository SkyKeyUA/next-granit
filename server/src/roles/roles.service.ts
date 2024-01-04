import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Role } from './schemas/role.schemas';
import { CreateRoleDto } from './dto/create-role.dto';

@Injectable()
export class RolesService {
  constructor(@InjectModel(Role.name) private rolesModule: Model<Role>) {}
  async create(dto: CreateRoleDto): Promise<Role> {
    const role = await this.rolesModule.create(dto);
    return role;
  }

  async getByValue(value: string) {
    const role = await this.rolesModule.findOne({ value });
    return role;
  }
}
