import IGetBookFilter from '../interfaces/IGetBookFilter';
import { BaseService } from './base.service';
export declare class DeleteBookService extends BaseService {
    deleteBook(id: number): Promise<IGetBookFilter>;
}
