import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { RolesService } from 'src/roles/roles.service';
import { AddRoleDto } from './dto/add-role.dto';
import { BanUserDto } from './dto/ban-user.dto';
import { User } from './model/user.model';
import { InjectModel } from '@nestjs/sequelize';
import { Role } from '@roles/model/roles.model';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User) private userModel: typeof User,
    private roleService: RolesService,
  ) {}

  async create(dto: CreateUserDto): Promise<User> {
    const user = await this.userModel.create(dto);
    const role = await this.roleService.getByValue('USER');
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
    const user = await this.userModel.findOne({ where: { id } });
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
    const { userId, value } = dto;
    const user = await this.userModel.findByPk(userId);
    const role = await this.roleService.getByValue(value);
    if (role && user) {
      await user.$add('role', role.id);
      return dto;
    }
    throw new HttpException('User or Role is not found', HttpStatus.NOT_FOUND);
  }

  async removeRole(dto: AddRoleDto) {
    const { userId, value } = dto;
    const user = await this.userModel.findByPk(userId);
    const role = await this.roleService.getByValue(value);
    if (role && user) {
      await user.$remove('role', role.id);
      return dto;
    }
    throw new HttpException('User or Role is not found', HttpStatus.NOT_FOUND);
  }

  async banUser(dto: BanUserDto) {
    const user = await this.userModel.findByPk(dto.userId);
    if (!user) {
      throw new HttpException('User is not found', HttpStatus.NOT_FOUND);
    }
    if (user.banned === false) {
      user.banned = true;
      user.banReason = dto.banReason;
    } else {
      user.banned = false;
      user.banReason = null;
    }
    await user.save();
    return user;
  }
}
