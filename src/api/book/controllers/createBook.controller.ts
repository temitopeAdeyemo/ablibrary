import { Body, Controller, Post, UseFilters } from '@nestjs/common';
import { CreateBookDto } from '../dtos/createBook.dto';
import { BookService } from '../services/createBook.service';
import { HttpErrorFilter } from 'src/shared/helpers/http-exception.filter';
import JsonResponse from 'src/shared/helpers/http-success.filter';

@UseFilters(new HttpErrorFilter())
@Controller('book')
export class CreateBookController {
  constructor(
    private jsonResponse: JsonResponse,
    private service: BookService,
  ) {}

  @Post()
  public async create(@Body() body: CreateBookDto) {
    const { author, title, year_published, description } = body;

    const response = await this.service.createBook({
      author,
      title,
      year_published,
      description,
    });

    return this.jsonResponse.build(200, 'Book created successfully', response);
  }
}
