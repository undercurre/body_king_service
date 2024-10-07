import { IsString } from 'class-validator';

export class CreateMottoDto {
  @IsString()
  user_id: string;

  @IsString()
  motto_text: string;
}
