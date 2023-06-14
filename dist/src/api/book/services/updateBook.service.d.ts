import IUpdateBookFilter from '../interfaces/IUpdateBookFilter';
import { BaseService } from './base.service';
export declare class UpdateBookService extends BaseService {
    updateBook(data: IUpdateBookFilter): Promise<void>;
}
