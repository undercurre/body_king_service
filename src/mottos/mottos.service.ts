import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Motto } from './motto.entity';

@Injectable()
export class MottosService {
  constructor(
    @InjectRepository(Motto)
    private mottosRepository: Repository<Motto>,
  ) {}

  createMotto(motto: Motto): Promise<Motto> {
    return this.mottosRepository.save(motto);
  }

  findAll(): Promise<Motto[]> {
    return this.mottosRepository.find();
  }

  findByUserId(userId: string): Promise<Motto[]> {
    return this.mottosRepository.find({ where: { user_id: userId } });
  }
}
