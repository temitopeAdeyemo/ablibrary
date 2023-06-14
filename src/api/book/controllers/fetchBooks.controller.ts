import { Controller, Get, Query, UseFilters } from '@nestjs/common';
import { GetBooksService } from '../services/getBooks.service';
import { HttpErrorFilter } from 'src/shared/helpers/http-exception.filter';
import JsonResponse from 'src/shared/helpers/http-success.filter';
import { GetBooksDto } from '../dtos/getBooks.dto';

@UseFilters(new HttpErrorFilter())
@Controller('books')
export class FetchBooksController {
  constructor(
    private jsonResponse: JsonResponse,
    private service: GetBooksService,
  ) {}

  @Get()
  public async get_all(
    @Query()
    data: GetBooksDto,
  ) {
    const response = await this.service.fetchBooks(data);

    return this.jsonResponse.build(
      200,
      'Books fetched successfully.',
      response,
    );
  }
}
