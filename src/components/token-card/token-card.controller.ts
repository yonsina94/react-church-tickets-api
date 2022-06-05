import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { TokenCardService } from './token-card.service';
import { CreateTokenCardDto } from './dto/create-token-card.dto';
import { UpdateTokenCardDto } from './dto/update-token-card.dto';
import { ApiTags } from '@nestjs/swagger';
import { Crud, CrudController } from '@nestjsx/crud';
import { TokenCard } from './entities/token-card.entity';

@Crud({
  model: { type: TokenCard },
  dto: { create: CreateTokenCardDto, update: UpdateTokenCardDto },
  params: { id: { field: 'id', type: 'uuid', primary: true } },
})
@ApiTags('token-cards')
@Controller('token-cards')
export class TokenCardController implements CrudController<TokenCard> {
  constructor(public service: TokenCardService) { }

}
