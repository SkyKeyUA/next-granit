import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './schemas/user.schemas';
import { Model } from 'mongoose';
import { RolesService } from 'src/roles/roles.service';
import { AddRoleDto } from './dto/add-role.dto';
import { BanUserDto } from './dto/ban-user.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name) private usersModule: Model<User>,
    private roleService: RolesService,
  ) {}

  async create(dto: CreateUserDto): Promise<User> {
    const role = await this.roleService.getByValue('USER');
    const user = await this.usersModule.create({ ...dto, roles: role });
    return user;
  }

  async getAll() {
    const users = await this.usersModule.find();
    return users;
  }

  async getByEmail(email: string) {
    const user = this.usersModule.findOne({ email });
    return user;
  }

  async addRole(dto: AddRoleDto) {
    const user = await this.usersModule.findById(dto.userId);
    const role = await this.roleService.getByValue(dto.value);
    if (role && user) {
      await user.roles.push(role);
      console.log(user);
      return user;
    }
    throw new HttpException('User or Role is not found', HttpStatus.NOT_FOUND);
  }

  async banUser(dto: BanUserDto) {}

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
