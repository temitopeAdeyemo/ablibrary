import {
  Controller,
  Get,
  Param,
  ParseIntPipe,
  UseFilters,
} from '@nestjs/common';
import { FetchBookService } from '../services/getBook.service';
import { HttpErrorFilter } from 'src/shared/helpers/http-exception.filter';
import JsonResponse from 'src/shared/helpers/http-success.filter';

@UseFilters(new HttpErrorFilter())
@Controller('book')
export class GetBookController {
  constructor(
    private jsonResponse: JsonResponse,
    private bookService: FetchBookService,
  ) {}

  @Get(':id')
  public async get(@Param('id', ParseIntPipe) id: number) {
    const response = await this.bookService.fetchBook(id);

    return this.jsonResponse.build(200, 'Book fetched successfully.', response);
  }
}
