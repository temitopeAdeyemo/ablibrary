import {
  Body,
  Controller,
  Param,
  ParseIntPipe,
  Patch,
  UseFilters,
} from '@nestjs/common';
import { UpdateBookService } from '../services/updateBook.service';
import { HttpErrorFilter } from 'src/shared/helpers/http-exception.filter';
import JsonResponse from 'src/shared/helpers/http-success.filter';
import { UpdateBookDto } from '../dtos/UpdateBookDto';

@UseFilters(new HttpErrorFilter())
@Controller('book')
export class UpdateBookController {
  constructor(
    private jsonResponse: JsonResponse,
    private updateBookService: UpdateBookService,
  ) {}

  @Patch(':id')
  public async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() data: UpdateBookDto,
  ) {
    const response = await this.updateBookService.updateBook({ id, ...data });

    return this.jsonResponse.build(200, 'Book updated successfully.', response);
  }
}
