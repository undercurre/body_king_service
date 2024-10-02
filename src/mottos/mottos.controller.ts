import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { MottosService } from './mottos.service';
import { Motto } from './motto.entity';

@Controller('mottos')
export class MottosController {
  constructor(private readonly mottosService: MottosService) {}

  @Post()
  create(@Body() motto: Motto): Promise<Motto> {
    return this.mottosService.createMotto(motto);
  }

  @Get()
  findAll(): Promise<Motto[]> {
    return this.mottosService.findAll();
  }

  @Get('user/:userId')
  findByUserId(@Param('userId') userId: string): Promise<Motto[]> {
    return this.mottosService.findByUserId(userId);
  }
}
