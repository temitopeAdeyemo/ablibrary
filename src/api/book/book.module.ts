import { Module } from '@nestjs/common';
import { CreateBookController } from './controllers/createBook.controller';
import { BookService } from './services/createBook.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Book } from './model/entities/book.entity';
import { BookRepository } from './model/repositories/book.repository';
import JsonResponse from 'src/shared/helpers/http-success.filter';
import { GetBookController } from './controllers/fetchBook.controller';
import { FetchBookService } from './services/getBook.service';
import { FetchBooksController } from './controllers/fetchBooks.controller';
import { GetBooksService } from './services/getBooks.service';
import { DeleteBookController } from './controllers/deleteBooks.controller';
import { DeleteBookService } from './services/deleteBook.service';
import { UpdateBookService } from './services/updateBook.service';
import { UpdateBookController } from './controllers/updateBooks.controller';
import { BaseController } from './controllers/base.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Book])],
  controllers: [
    CreateBookController,
    GetBookController,
    FetchBooksController,
    DeleteBookController,
    UpdateBookController,
    BaseController,
  ],
  providers: [
    BookService,
    BookRepository,
    JsonResponse,
    FetchBookService,
    GetBooksService,
    DeleteBookService,
    UpdateBookService,
  ],
})
export class BookModule {}
