import {
  Controller,
  Delete,
  Param,
  ParseIntPipe,
  UseFilters,
} from '@nestjs/common';
import { DeleteBookService } from '../services/deleteBook.service';
import { HttpErrorFilter } from 'src/shared/helpers/http-exception.filter';
import JsonResponse from 'src/shared/helpers/http-success.filter';

@UseFilters(new HttpErrorFilter())
@Controller('book')
export class DeleteBookController {
  constructor(
    private jsonResponse: JsonResponse,
    private deleteBookService: DeleteBookService,
  ) {}

  @Delete(':id')
  public async delete(@Param('id', ParseIntPipe) id: number) {
    const response = await this.deleteBookService.deleteBook(id);

    return this.jsonResponse.build(200, 'Book deleted successfully.', response);
  }
}
