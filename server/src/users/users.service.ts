import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { RolesService } from 'src/roles/roles.service';
import { AddRoleDto } from './dto/add-role.dto';
import { BanUserDto } from './dto/ban-user.dto';
import { User } from './model/user.model';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User) private userModel: typeof User,
    private roleService: RolesService,
  ) {}

  async create(dto: CreateUserDto): Promise<User> {
    const user = await this.userModel.create(dto);
    const role = await this.roleService.getByValue('ADMIN');
    await user.$set('roles', [role.id]);
    user.roles = [role];
    return user;
  }

  async getAll(): Promise<User[]> {
    const users = await this.userModel.findAll({ include: { all: true } });
    return users;
  }

  async findOne(id: number): Promise<User> {
    const user = await this.userModel.findOne({
      where: {
        id,
      },
    });
    if (user) {
      return user;
    }
    throw new HttpException('User is not found', HttpStatus.NOT_FOUND);
  }

  async updateUser(id: number, updateUserDto: Partial<CreateUserDto>) {
    const user = await this.userModel.update(updateUserDto, { where: { id } });
    return updateUserDto;
  }

  async deleteUser(id: number) {
    const user = await this.findOne(id);
    await user.destroy();
    return user;
  }

  async getByEmail(email: string) {
    const user = await this.userModel.findOne({
      where: { email },
      include: { all: true },
    });
    return user;
  }

  async addRole(dto: AddRoleDto) {
    const user = await this.userModel.findByPk(dto.userId);
    const role = await this.roleService.getByValue(dto.value);
    if (role && user) {
      await user.$add('role', role.id);
      return dto;
    }
    throw new HttpException('User or Role is not found', HttpStatus.NOT_FOUND);
  }

  async banUser(dto: BanUserDto) {
    const user = await this.userModel.findByPk(dto.userId);
    user.banned = true;
    user.banReason = dto.banReason;
    await user.save();
    return user;
  }
}
