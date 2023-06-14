import { Injectable } from '@nestjs/common';
import { CreateBookDto } from '../dtos/createBook.dto';
import IGetBookFilter from '../interfaces/IGetBookFilter';
import { BaseService } from './base.service';

@Injectable()
export class BookService extends BaseService {
  public async createBook(data: CreateBookDto): Promise<IGetBookFilter> {
    await this.throwExcIfFound({
      author: data.author,
      title: data.title,
    });

    const newBook = await this.bookRepository.createBook(data);
    return { id: newBook.id };
  }
}
