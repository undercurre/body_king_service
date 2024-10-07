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
  step_count: number = 0;

  @IsOptional()
  @IsNumber()
  weight: number = 0;

  @IsNotEmpty()
  @IsDate()
  sleep_start_time: Date;

  @IsNotEmpty()
  @IsDate()
  sleep_end_time: Date;

  @IsOptional()
  @IsNumber()
  water_cups: number = 0;

  @IsOptional()
  @IsNumber()
  drink_ml: number = 0;

  @IsOptional()
  @IsNumber()
  code_lines: number = 0;

  @IsOptional()
  @IsNumber()
  snack_calories: number = 0;

  @IsOptional()
  @IsNumber()
  video_game_time: number = 0;

  @IsOptional()
  @IsNumber()
  exercise_calories: number = 0;

  @IsOptional()
  @IsNumber()
  music_time: number = 0;
}
