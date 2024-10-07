import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { UserDailyService } from './daily.service';
import { CreateUserDailyDto } from './dto/create.dto';
import { UpdateUserDailyDto } from './dto/update.dto';
import { UserDaily } from './daily.entity';

@Controller('user-data')
export class UserDailyController {
  constructor(private readonly UserDailyService: UserDailyService) {}

  @Post()
  create(@Body() createUserDailyDto: CreateUserDailyDto): Promise<UserDaily> {
    return this.UserDailyService.create(createUserDailyDto);
  }

  @Get()
  findAll(): Promise<UserDaily[]> {
    return this.UserDailyService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<UserDaily> {
    return this.UserDailyService.findOne(id);
  }

  @Get('user/:userId')
  findOneByUserId(@Param('userId') id: string): Promise<UserDaily> {
    return this.UserDailyService.findOneByUserId(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateUserDailyDto: UpdateUserDailyDto,
  ): Promise<UserDaily> {
    return this.UserDailyService.update(id, updateUserDailyDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.UserDailyService.remove(id);
  }
}
