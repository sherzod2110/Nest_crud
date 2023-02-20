import {   Type } from 'class-transformer';
import { IsString, IsNumber, IsNotEmpty,   IsOptional,
    MinLength,
    MaxLength, } from 'class-validator';

export class UserDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsNumber()
  @IsNotEmpty()
  age: number;
}



export class UpdateDto {
  @Type(() => Number)
  readonly id: number;

  @MinLength(1)
  @MaxLength(25)
  @IsString()
  @Type(() => String)
  @IsNotEmpty()
  @IsOptional()
  readonly name: string;

  @IsNumber()
  @IsNotEmpty()
  @IsOptional()
  readonly age: number;
}
