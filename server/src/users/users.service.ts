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
    @InjectModel(User) private userRepository: typeof User,
    private roleService: RolesService,
  ) {}

  async create(dto: CreateUserDto): Promise<User> {
    const role = await this.roleService.getByValue('USER');
    const user = await this.userRepository.create(dto);
    return user;
  }

  async getAll(): Promise<User[]> {
    const users = await this.userRepository.findAll();
    return users;
  }

  async findOne(id: number): Promise<User> {
    const user = await this.userRepository.findById(id);
    if (user) {
      return user;
    }
    throw new HttpException('User is not found', HttpStatus.NOT_FOUND);
  }

  async update(id: number, updateUserDto: Partial<CreateUserDto>) {
    const user = await this.userRepository.updateOne(
      { _id: id },
      updateUserDto,
    );
    return updateUserDto;
  }

  async delete(id: number) {
    const user = await this.userRepository.findByIdAndDelete(id);
    return user;
  }

  async getByEmail(email: string) {
    const user = this.userRepository.findOne({ email });
    return user;
  }

  async addRole(dto: AddRoleDto) {
    const user = await this.userRepository.findById(dto.userId);
    const role = await this.roleService.getByValue(dto.value);
    if (role && user) {
      user.roles.push(role);
      return user;
    }
    throw new HttpException('User or Role is not found', HttpStatus.NOT_FOUND);
  }

  async banUser(dto: BanUserDto) {}
}
