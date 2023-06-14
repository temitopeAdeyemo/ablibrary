import { DeleteBookService } from '../services/deleteBook.service';
import JsonResponse from 'src/shared/helpers/http-success.filter';
export declare class DeleteBookController {
    private jsonResponse;
    private deleteBookService;
    constructor(jsonResponse: JsonResponse, deleteBookService: DeleteBookService);
    delete(id: number): Promise<object>;
}
