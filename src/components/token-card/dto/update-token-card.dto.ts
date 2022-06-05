import { PartialType } from '@nestjs/mapped-types';
import { CreateTokenCardDto } from './create-token-card.dto';

export class UpdateTokenCardDto extends PartialType(CreateTokenCardDto) {}
