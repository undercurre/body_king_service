import { Test, TestingModule } from '@nestjs/testing';
import { MottosService } from './mottos.service';

describe('MottosService', () => {
  let service: MottosService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MottosService],
    }).compile();

    service = module.get<MottosService>(MottosService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
