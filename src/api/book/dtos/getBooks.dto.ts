import { IsString, IsOptional } from 'class-validator';

export class GetBooksDto {
  @IsOptional()
  @IsString()
  public title?: string;

  @IsOptional()
  @IsString()
  public author?: string;

  @IsOptional()
  @IsString()
  public year_published?: string;
}
