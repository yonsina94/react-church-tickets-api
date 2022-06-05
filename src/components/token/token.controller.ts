import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { TokenService } from './token.service';
import { CreateTokenDto } from './dto/create-token.dto';
import { UpdateTokenDto } from './dto/update-token.dto';
import { Token } from './entities/token.entity';
import { Crud, CrudController } from '@nestjsx/crud';

@Crud({
  model: { type: Token },
  dto: { create: CreateTokenDto, update: UpdateTokenDto },
  params: { id: { field: 'id', type: 'uuid', primary: true } },
})
@Controller('tokens')
export class TokensController implements CrudController<Token> {
  constructor(public service: TokenService) { }
}
