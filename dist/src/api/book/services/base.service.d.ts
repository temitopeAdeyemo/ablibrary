import { Book } from '../model/entities/book.entity';
import { BookRepository } from '../model/repositories/book.repository';
import IGetBookFilter from '../interfaces/IGetBookFilter';
export declare class BaseService {
    protected readonly bookRepository: BookRepository;
    returnBookIfFound(id: number): Promise<Book>;
    throwExcIfFound(data: IGetBookFilter): Promise<Book>;
}
