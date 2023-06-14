import { CreateBookDto } from '../dtos/createBook.dto';
import IGetBookFilter from '../interfaces/IGetBookFilter';
import { BaseService } from './base.service';
export declare class BookService extends BaseService {
    createBook(data: CreateBookDto): Promise<IGetBookFilter>;
}
