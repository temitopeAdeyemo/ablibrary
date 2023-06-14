import { IsString, IsOptional } from 'class-validator';

export class UpdateBookDto {
  @IsOptional()
  @IsString()
  public title?: string;

  @IsOptional()
  @IsString()
  public description?: string;
}
