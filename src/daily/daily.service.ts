import { UserDaily } from './daily.entity';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDailyDto } from './dto/create.dto';
import { UpdateUserDailyDto } from './dto/update.dto';
import * as shortid from 'shortid';
import { isSecondDayOrLater } from 'src/utils/day';

@Injectable()
export class UserDailyService {
  constructor(
    @InjectRepository(UserDaily)
    private readonly UserDailyRepository: Repository<UserDaily>,
  ) {}

  async create(createUserDailyDto: CreateUserDailyDto): Promise<UserDaily> {
    console.log(createUserDailyDto);
    let userDaily: UserDaily;
    const recent = await this.UserDailyRepository.findOne({
      order: { updated_at: 'DESC' },
      where: { user_id: createUserDailyDto.user_id },
    });
    const now = new Date();
    if (isSecondDayOrLater(recent.updated_at, now)) {
      userDaily = this.UserDailyRepository.create({
        user_id: createUserDailyDto.user_id,
        step_count: createUserDailyDto.step_count || 0,
        weight: createUserDailyDto.weight || 0,
        water_cups: createUserDailyDto.water_cups || 0,
        drink_ml: createUserDailyDto.drink_ml || 0,
        code_lines: createUserDailyDto.code_lines || 0,
        snack_calories: createUserDailyDto.snack_calories || 0,
        video_game_time: createUserDailyDto.video_game_time || 0,
        exercise_calories: createUserDailyDto.exercise_calories || 0,
        music_time: createUserDailyDto.music_time || 0,
        sleep_start_time:
          new Date(createUserDailyDto.sleep_start_time) || new Date(),
        sleep_end_time:
          new Date(createUserDailyDto.sleep_end_time) || new Date(),
        id: shortid.generate(),
      });
    } else {
      userDaily = this.UserDailyRepository.create({
        user_id: createUserDailyDto.user_id,
        step_count: createUserDailyDto.step_count || recent.step_count,
        weight: createUserDailyDto.weight || recent.weight,
        water_cups: createUserDailyDto.water_cups || recent.water_cups,
        drink_ml: createUserDailyDto.drink_ml || recent.drink_ml,
        code_lines: createUserDailyDto.code_lines || recent.code_lines,
        snack_calories:
          createUserDailyDto.snack_calories || recent.snack_calories,
        video_game_time:
          createUserDailyDto.video_game_time || recent.video_game_time,
        exercise_calories:
          createUserDailyDto.exercise_calories || recent.exercise_calories,
        music_time: createUserDailyDto.music_time || recent.music_time,
        sleep_start_time: createUserDailyDto.sleep_start_time
          ? new Date(createUserDailyDto.sleep_start_time)
          : new Date(recent.sleep_start_time),
        sleep_end_time: createUserDailyDto.sleep_start_time
          ? new Date(createUserDailyDto.sleep_end_time)
          : new Date(recent.sleep_end_time),
        id: shortid.generate(),
      });
    }
    return this.UserDailyRepository.save(userDaily);
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

  async findOneByUserId(user_id: string): Promise<UserDaily> {
    const UserDaily = await this.UserDailyRepository.findOne({
      order: { updated_at: 'DESC' },
      where: { user_id },
    });
    if (!UserDaily) {
      throw new NotFoundException(`UserDaily with UserId ${user_id} not found`);
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
