import { Test, TestingModule } from '@nestjs/testing';
import { GownsService } from './gowns.service';

describe('GownsService', () => {
  let service: GownsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GownsService],
    }).compile();

    service = module.get<GownsService>(GownsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
