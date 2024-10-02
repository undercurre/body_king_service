import { UserDaily } from './daily.entity';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDailyDto } from './dto/create.dto';
import { UpdateUserDailyDto } from './dto/update.dto';

@Injectable()
export class UserDailyService {
  constructor(
    @InjectRepository(UserDaily)
    private readonly UserDailyRepository: Repository<UserDaily>,
  ) {}

  async create(createUserDailyDto: CreateUserDailyDto): Promise<UserDaily> {
    const UserDaily = this.UserDailyRepository.create(createUserDailyDto);
    return this.UserDailyRepository.save(UserDaily);
  }

  async findAll(): Promise<UserDaily[]> {
    return this.UserDailyRepository.find();
  }

  async findOne(id: string): Promise<UserDaily> {
    const UserDaily = await this.UserDailyRepository.findOne({ where: { id } });
    if (!UserDaily) {
      throw new NotFoundException(`UserDaily with ID ${id} not found`);
    }
    return UserDaily;
  }

  async update(
    id: string,
    updateUserDailyDto: UpdateUserDailyDto,
  ): Promise<UserDaily> {
    const UserDaily = await this.UserDailyRepository.preload({
      id: id,
      ...updateUserDailyDto,
    });
    if (!UserDaily) {
      throw new NotFoundException(`UserDaily with ID ${id} not found`);
    }
    return this.UserDailyRepository.save(UserDaily);
  }

  async remove(id: string): Promise<void> {
    const UserDaily = await this.findOne(id);
    await this.UserDailyRepository.remove(UserDaily);
  }
}
