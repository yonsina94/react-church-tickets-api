import { Test, TestingModule } from '@nestjs/testing';
import { TokenCardService } from './token-card.service';

describe('TokenCardService', () => {
  let service: TokenCardService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TokenCardService],
    }).compile();

    service = module.get<TokenCardService>(TokenCardService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
