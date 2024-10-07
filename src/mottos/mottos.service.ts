import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Motto } from './motto.entity';
import { CreateMottoDto } from './dto/create.dto';
import * as shortid from 'shortid';

@Injectable()
export class MottosService {
  constructor(
    @InjectRepository(Motto)
    private mottosRepository: Repository<Motto>,
  ) {}

  async createMotto(createMottoDto: CreateMottoDto): Promise<Motto> {
    const motto = this.mottosRepository.create({
      ...createMottoDto,
      id: shortid.generate(),
    });
    return this.mottosRepository.save(motto);
  }

  findAll(): Promise<Motto[]> {
    return this.mottosRepository.find();
  }

  findByUserId(userId: string): Promise<Motto[]> {
    return this.mottosRepository.find({ where: { user_id: userId } });
  }
}
