import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateBookDto } from '../../dtos/createBook.dto';
import { Book } from '../entities/book.entity';
import IGetBookFilter from '../../interfaces/IGetBookFilter';

@Injectable()
export class BookRepository {
  @InjectRepository(Book)
  private readonly repository: Repository<Book>;

  public getBookByData(data: IGetBookFilter): Promise<Book> {
    return this.repository.findOne({ where: data });
  }

  public async createBook(data: CreateBookDto): Promise<Book> {
    const book = this.repository.create(data);
    await this.repository.save(book);

    return book;
  }

  public async deleteBookById(id: number): Promise<void> {
    await this.repository.delete({ id });
    return;
  }

  public async fetchBooks(data?: IGetBookFilter): Promise<Book[]> {
    const books = await this.repository.find({ where: data });
    return books;
  }

  public async save(data: Book): Promise<void> {
    await this.repository.save(data);
    return;
  }
}
