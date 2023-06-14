import { Injectable } from '@nestjs/common';
import IGetBookFilter from '../interfaces/IGetBookFilter';
import { BaseService } from './base.service';

@Injectable()
export class DeleteBookService extends BaseService {
  public async deleteBook(id: number): Promise<IGetBookFilter> {
    await this.returnBookIfFound(id);
    await this.bookRepository.deleteBookById(id);

    return;
  }
}
