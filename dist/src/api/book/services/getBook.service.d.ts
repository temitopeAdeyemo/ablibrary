import { Book } from '../model/entities/book.entity';
import { BaseService } from './base.service';
export declare class FetchBookService extends BaseService {
    fetchBook(id: number): Promise<Book>;
}
