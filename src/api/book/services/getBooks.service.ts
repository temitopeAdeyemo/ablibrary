import { BadRequestException, Inject, Injectable } from '@nestjs/common';
import { BookRepository } from '../model/repositories/book.repository';
import IGetBookFilter from '../interfaces/IGetBookFilter';
import constants from 'src/shared/utils/constants';
const { noBookFound } = constants;

@Injectable()
export class GetBooksService {
  @Inject(BookRepository)
  private readonly bookRepository: BookRepository;

  public async fetchBooks(data?: IGetBookFilter): Promise<IGetBookFilter[]> {
    const books = await this.bookRepository.fetchBooks(data);

    if (!books.length) {
      throw new BadRequestException(noBookFound);
    }

    return books;
  }
}
