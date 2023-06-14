import { CreateBookDto } from '../../dtos/createBook.dto';
import { Book } from '../entities/book.entity';
import IGetBookFilter from '../../interfaces/IGetBookFilter';
export declare class BookRepository {
    private readonly repository;
    getBookByData(data: IGetBookFilter): Promise<Book>;
    createBook(data: CreateBookDto): Promise<Book>;
    deleteBookById(id: number): Promise<void>;
    fetchBooks(data?: IGetBookFilter): Promise<Book[]>;
    save(data: Book): Promise<void>;
}
