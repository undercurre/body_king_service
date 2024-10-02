import {
  IsNotEmpty,
  IsNumber,
  IsString,
  IsDate,
  IsOptional,
} from 'class-validator';

export class CreateUserDailyDto {
  @IsNotEmpty()
  @IsString()
  user_id: string;

  @IsOptional()
  @IsNumber()
  step_count?: number;

  @IsOptional()
  @IsNumber()
  weight?: number;

  @IsNotEmpty()
  @IsDate()
  sleep_start_time: Date;

  @IsNotEmpty()
  @IsDate()
  sleep_end_time: Date;

  @IsOptional()
  @IsNumber()
  water_cups?: number;

  @IsOptional()
  @IsNumber()
  drink_ml?: number;

  @IsOptional()
  @IsNumber()
  code_lines?: number;

  @IsOptional()
  @IsNumber()
  snack_calories?: number;

  @IsOptional()
  @IsNumber()
  video_game_time?: number;

  @IsOptional()
  @IsNumber()
  exercise_calories?: number;

  @IsOptional()
  @IsNumber()
  music_time?: number;
}
