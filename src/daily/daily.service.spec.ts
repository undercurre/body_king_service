import { Test, TestingModule } from '@nestjs/testing';
import { UserDailyService } from './daily.service';

describe('DailyService', () => {
  let service: UserDailyService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserDailyService],
    }).compile();

    service = module.get<UserDailyService>(UserDailyService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
