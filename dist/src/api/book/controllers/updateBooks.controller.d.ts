import { UpdateBookService } from '../services/updateBook.service';
import JsonResponse from 'src/shared/helpers/http-success.filter';
import { UpdateBookDto } from '../dtos/UpdateBookDto';
export declare class UpdateBookController {
    private jsonResponse;
    private updateBookService;
    constructor(jsonResponse: JsonResponse, updateBookService: UpdateBookService);
    update(id: number, data: UpdateBookDto): Promise<object>;
}
