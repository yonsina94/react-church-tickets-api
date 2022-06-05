import { ApiOperation, ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber, IsString, MaxLength } from "class-validator";

export class CreateTokenCardDto {
    @ApiProperty()
    @IsString()
    @MaxLength(120)
    @IsNotEmpty()
    public tokenName: string;

    @ApiProperty()
    @IsString()
    @MaxLength(256)
    @IsNotEmpty()
    public tokenDescription: string;

    @ApiProperty()
    @IsString()
    @MaxLength(15)
    @IsNotEmpty()
    public tokenMainCode: string;

    @ApiProperty()
    @IsNumber()
    @IsNotEmpty()
    public amount: number;
}