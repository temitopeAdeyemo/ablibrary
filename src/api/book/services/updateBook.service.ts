import { Injectable } from '@nestjs/common';

import IUpdateBookFilter from '../interfaces/IUpdateBookFilter';
import { BaseService } from './base.service';

@Injectable()
export class UpdateBookService extends BaseService {
  public async updateBook(data: IUpdateBookFilter): Promise<void> {
    const book = await this.returnBookIfFound(data.id);

    await this.bookRepository.save({ ...book, ...data });
    return;
  }
}
