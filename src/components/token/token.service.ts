import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Repository } from 'typeorm';
import { CreateTokenDto } from './dto/create-token.dto';
import { UpdateTokenDto } from './dto/update-token.dto';
import { Token } from './entities/token.entity';

@Injectable()
export class TokenService extends TypeOrmCrudService<Token> {
    constructor(
        @InjectRepository(Token) public readonly repo: Repository<Token>,
    ) {
        super(repo);
    }
}
