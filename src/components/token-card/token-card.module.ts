import { Module } from '@nestjs/common';
import { TokenCardService } from './token-card.service';
import { TokenCardController } from './token-card.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TokenCard } from './entities/token-card.entity';
import { TokenModule } from '../token/token.module';

@Module({
  imports: [TypeOrmModule.forFeature([TokenCard]), TokenModule],
  controllers: [TokenCardController],
  providers: [TokenCardService],
})
export class TokenCardModule { }
