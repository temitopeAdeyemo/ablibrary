import { Injectable } from '@nestjs/common';
import { Book } from '../model/entities/book.entity';
import { BaseService } from './base.service';

@Injectable()
export class FetchBookService extends BaseService {
  public async fetchBook(id: number): Promise<Book> {
    const book = await this.returnBookIfFound(id);
    return book;
  }
}
