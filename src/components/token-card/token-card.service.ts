import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Repository } from 'typeorm';
import { CreateTokenCardDto } from './dto/create-token-card.dto';
import { UpdateTokenCardDto } from './dto/update-token-card.dto';
import { TokenCard } from './entities/token-card.entity';

@Injectable()
export class TokenCardService extends TypeOrmCrudService<TokenCard>{
  constructor(
    @InjectRepository(TokenCard) public readonly repo: Repository<TokenCard>,
  ) {
    super(repo);
  }
}
