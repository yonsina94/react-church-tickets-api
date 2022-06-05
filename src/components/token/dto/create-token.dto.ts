import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
    IsBoolean,
    IsNotEmpty,
    IsOptional,
    IsString,
    IsUUID,
} from 'class-validator';

export class CreateTokenDto {
    @ApiProperty()
    @IsUUID()
    @IsNotEmpty()
    public tokenCardId: string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    public tokenCode: string;

    @ApiPropertyOptional()
    @IsBoolean()
    @IsOptional()
    public isSold?: boolean;

    @ApiPropertyOptional()
    @IsBoolean()
    @IsOptional()
    public isReserved?: boolean;
}
