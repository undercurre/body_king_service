import { Test, TestingModule } from '@nestjs/testing';
import { MottosController } from './mottos.controller';

describe('MottosController', () => {
  let controller: MottosController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MottosController],
    }).compile();

    controller = module.get<MottosController>(MottosController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
