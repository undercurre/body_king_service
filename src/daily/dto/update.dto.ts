import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDailyDto } from './create.dto';

export class UpdateUserDailyDto extends PartialType(CreateUserDailyDto) {}
