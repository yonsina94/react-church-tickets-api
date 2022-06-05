import { Test, TestingModule } from '@nestjs/testing';
import { TokenCardController } from './token-card.controller';
import { TokenCardService } from './token-card.service';

describe('TokenCardController', () => {
  let controller: TokenCardController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TokenCardController],
      providers: [TokenCardService],
    }).compile();

    controller = module.get<TokenCardController>(TokenCardController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
