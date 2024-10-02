import { Test, TestingModule } from '@nestjs/testing';
import { UserDailyController } from './daily.controller';

describe('DailyController', () => {
  let controller: UserDailyController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserDailyController],
    }).compile();

    controller = module.get<UserDailyController>(UserDailyController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
