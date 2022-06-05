import { Module } from '@nestjs/common';
import { TokenService } from './token.service';
import { TokensController } from './token.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Token } from './entities/token.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Token])],
  controllers: [TokensController],
  providers: [TokenService],
  exports: [TokenService],
})
export class TokenModule { }
