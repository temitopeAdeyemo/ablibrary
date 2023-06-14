import { BadRequestException, Inject, Injectable } from '@nestjs/common';
import { Book } from '../model/entities/book.entity';
import { BookRepository } from '../model/repositories/book.repository';
import constants from 'src/shared/utils/constants';
import IGetBookFilter from '../interfaces/IGetBookFilter';
const { bookNotFound, bookExists } = constants;

@Injectable()
export class BaseService {
  @Inject(BookRepository)
  protected readonly bookRepository: BookRepository;

  public async returnBookIfFound(id: number): Promise<Book> {
    const book = await this.bookRepository.getBookByData({ id });

    if (!book) {
      throw new BadRequestException(bookNotFound);
    }

    return book;
  }

  public async throwExcIfFound(data: IGetBookFilter): Promise<Book> {
    const book = await this.bookRepository.getBookByData(data);

    if (book) {
      throw new BadRequestException(bookExists);
    }

    return null;
  }
}
