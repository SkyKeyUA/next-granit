import { Injectable } from '@nestjs/common';
import { CreateRoleDto } from './dto/create-role.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Role } from './model/roles.model';

@Injectable()
export class RolesService {
  constructor(@InjectModel(Role) private roleModel: typeof Role) {}
  async create(dto: CreateRoleDto): Promise<Role> {
    const role = await this.roleModel.create(dto);

    return role;
  }

  async getByValue(value: string) {
    const role = await this.roleModel.findOne({ where: { value } });
    return role;
  }
}
