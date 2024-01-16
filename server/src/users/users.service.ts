import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './schemas/user.schemas';
import { Model, ObjectId, Types } from 'mongoose';
import { RolesService } from 'src/roles/roles.service';
import { AddRoleDto } from './dto/add-role.dto';
import { BanUserDto } from './dto/ban-user.dto';
import { UserRole } from 'src/roles/schemas/user-role.schemas';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name) private usersModule: Model<User>,
    @InjectModel(UserRole.name) private userRoleModule: Model<UserRole>,
    private roleService: RolesService,
  ) {}

  async create(dto: CreateUserDto): Promise<User> {
    const role = await this.roleService.getByValue('USER');
    const user = await this.usersModule.create({ ...dto, roles: role });
    const userRole = await this.userRoleModule.create({
      _id: new Types.ObjectId(),
      roleId: role._id,
      userId: user._id,
    });
    role.userRoles = [userRole];
    await user.save();
    return user;
  }

  async getAll(): Promise<User[]> {
    const users = await this.usersModule.find();
    return users;
  }

  async findOne(id: ObjectId): Promise<User> {
    const user = await this.usersModule.findById(id);
    if (user) {
      return user;
    }
    throw new HttpException('User is not found', HttpStatus.NOT_FOUND);
  }

  async update(id: ObjectId, updateUserDto: Partial<CreateUserDto>) {
    const user = await this.usersModule.updateOne({ _id: id }, updateUserDto);
    return updateUserDto;
  }

  async delete(id: ObjectId) {
    const user = await this.usersModule.findByIdAndDelete(id);
    return user;
  }

  async getByEmail(email: string) {
    const user = this.usersModule.findOne({ email });
    return user;
  }

  async addRole(dto: AddRoleDto) {
    const user = await this.usersModule.findById(dto.userId);
    const role = await this.roleService.getByValue(dto.value);
    if (role && user) {
      user.roles.push(role);
      return user;
    }
    throw new HttpException('User or Role is not found', HttpStatus.NOT_FOUND);
  }

  async banUser(dto: BanUserDto) {}
}
