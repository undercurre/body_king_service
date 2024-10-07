import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { MottosService } from './mottos.service';
import { Motto } from './motto.entity';
import { CreateMottoDto } from './dto/create.dto';

@Controller('mottos')
export class MottosController {
  constructor(private readonly mottosService: MottosService) {}

  @Post()
  create(@Body() createMottoDto: CreateMottoDto): Promise<Motto> {
    return this.mottosService.createMotto(createMottoDto);
  }

  @Get()
  async findAll(): Promise<{ result: Motto[] }> {
    const mottos = await this.mottosService.findAll();
    return { result: mottos };
  }

  @Get('user/:userId')
  async findByUserId(
    @Param('userId') userId: string,
  ): Promise<{ result: Motto[] }> {
    const mottos = await this.mottosService.findByUserId(userId);
    return { result: mottos };
  }
}
